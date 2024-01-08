import * as React from 'react';
import PropTypes from 'prop-types';
import ContainerCard from '../../../components/Container/ContainerCard';
import CardNote from '../../../components/Card/CardNote';
import EmptyNotesLayout from '../../../components/layouts/EmptyNotesLayout';
import ilustrationEmptyNotes from '../../../assets/ilustration/empty-note.svg';
import SkeletonCardNote from '../../../components/Skeleton/SkeletonCardNote';
import useLanguageContext from '../../../hooks/useLanguageContext';

export default function NoteCards({ data, isLoading }) {
  const { state: language } = useLanguageContext();

  return (
    <>
      {data?.length > 0 && (
      <ContainerCard data-aos="fade">
        {data?.length > 0 && data?.map((note) => (
          <CardNote id={note.id} key={note.id} to={`/catatan/modebaca/id-${note?.id}`}>
            <CardNote.Head
              title={note?.title}
              date={note?.createdAt}
            />
            <CardNote.Body noteBody={note?.body} />
            <CardNote.Foot
              id={note.id}
            />
          </CardNote>
        ))}
      </ContainerCard>
      )}

      {isLoading && (
        <ContainerCard>
          {Array.from(new Array(6).keys()).map((key) => (
            <SkeletonCardNote key={key} />
          ))}
        </ContainerCard>
      )}

      {data?.length < 1 && (
        <section className="mt-8" data-aos="fade-up">
          <EmptyNotesLayout
            image={ilustrationEmptyNotes}
            text={language === 'id' ? '!Tidak Ada Catatan' : 'Notes not found!'}
          />
        </section>
      )}
    </>
  );
}

NoteCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    archived: PropTypes.bool,

  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
