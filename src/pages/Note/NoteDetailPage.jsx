import * as React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import HeadingNoteDetail from './Layout/HeadingNoteDetail';
import BodyNoteDetail from './Layout/BodyNoteDetail';
import ButtonOpenMenu from './Layout/ButtonOpenMenu';
import useLanguageContext from '../../hooks/useLanguageContext';
import TitlePage from '../../components/Typography/TitlePage';
import useGetData from '../../hooks/useGetData';
import { getNote } from '../../service/network-data';
import SkeletonDetailNote from '../../components/Skeleton/SkeletonDetailNote';

export default function NoteDetailPage() {
  const { id } = useParams();
  const idParams = id.replace(/id-/, '');

  const { data: note, isLoading, isSuccess } = useGetData(getNote(idParams));

  const { state: language } = useLanguageContext();

  return (
    <>
      {isSuccess && (
      <>
        <div className="px-8 mt-4 sm:mt-6 pb-10" data-aos="fade-up">
          <Container>
            <TitlePage
              title={language === 'id' ? 'Detail Catatan' : 'Detailed Notes'}
              isArchived={note.archived}
            />

            <HeadingNoteDetail
              data={note}
              isArchived={note.archived}
            />

            <BodyNoteDetail data={note} />

          </Container>
        </div>
        <ButtonOpenMenu data={note} isArchived={note.archived} />
      </>
      )}
      {isLoading && <SkeletonDetailNote />}
    </>
  );
}
