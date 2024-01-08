import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../../components/Container';
import SearchLayout from '../../components/layouts/SearchLayout';
import NoteArchiveCards from './Layout/NoteArchiveCards';
import ButtonAddNote from '../../components/button/ButtonAddNote';
import useLanguageContext from '../../hooks/useLanguageContext';
import TitlePage from '../../components/Typography/TitlePage';
import useGetData from '../../hooks/useGetData';
import { getArchivedNotes, getUserLogged } from '../../service/network-data';

export default function ArchivePage() {
  const [searchParams] = useSearchParams();

  const { state: language } = useLanguageContext();

  const { data, isSuccess, isLoading } = useGetData(getArchivedNotes());

  const {
    data: user,
    isLoading: userLoading,
    isSuccess: userSuccess,
  } = useGetData(getUserLogged());

  const archivedNotes = isSuccess ? data : [];

  const notesAfterSearchByTitle = archivedNotes?.filter((note) => {
    const titleLowerCase = note.title.toLowerCase();
    const getSearchTitle = searchParams.get('query');
    const searchTitleLowerCase = typeof getSearchTitle === 'string'
      ? getSearchTitle.toLowerCase() : '';

    return titleLowerCase.includes(searchTitleLowerCase);
  });

  return (
    <>
      <div className="px-8" data-aos="fade-up">
        <Container>
          {userSuccess && (
          <TitlePage
            title={language === 'id'
              ? `Selamat Datang ${user.name}` : `Welcome ${user.name}`}
            isArchived
          />
          )}

          {userLoading && (
            <TitlePage
              title="Loading...."
              isArchived
            />
          )}

          <SearchLayout
            label={language === 'id' ? 'Mencari Catatan (Arisp)' : 'Search Notes (Archived)'}
            isArchive
          />
          <NoteArchiveCards data={notesAfterSearchByTitle} isLoading={isLoading} />
        </Container>
      </div>
      <ButtonAddNote isArchived />
    </>
  );
}
