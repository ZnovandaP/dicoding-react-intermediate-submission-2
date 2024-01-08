import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../../components/Container';
import SearchLayout from '../../components/layouts/SearchLayout';
import NoteCards from './Layout/NoteCards';
import ButtonAddNote from '../../components/button/ButtonAddNote';
import useLanguageContext from '../../hooks/useLanguageContext';
import TitlePage from '../../components/Typography/TitlePage';
import { getActiveNotes, getUserLogged } from '../../service/network-data';
import useGetData from '../../hooks/useGetData';

export default function NotesPage() {
  const [searchParams] = useSearchParams();

  const { state: language } = useLanguageContext();

  const { data, isLoading, isSuccess } = useGetData(getActiveNotes());

  const {
    data: user,
    isLoading: userLoading,
    isSuccess: userSuccess,
  } = useGetData(getUserLogged());

  const notes = isSuccess ? data : [];

  const notesAfterSearchByTitle = notes?.filter((note) => {
    const titleLowerCase = note.title.toLowerCase();
    const getSearchTitle = searchParams.get('query');
    const searchTitleLowerCase = typeof getSearchTitle === 'string' ? getSearchTitle.toLowerCase() : '';

    return titleLowerCase.includes(searchTitleLowerCase);
  });

  return (
    <>
      <div className="px-8" data-aos="fade-up">
        <Container>
          {userSuccess && (
          <TitlePage
            title={language === 'id' ? `Selamat Datang ${user.name}` : `Welcome ${user.name}`}
          />
          )}

          {userLoading && (
            <TitlePage
              title="Loading...."
            />
          )}

          <SearchLayout
            label={language === 'id' ? 'Mencari Catatan' : 'Search Notes'}
          />

          <NoteCards data={notesAfterSearchByTitle} isLoading={isLoading} />
        </Container>
      </div>
      <ButtonAddNote />
    </>
  );
}
