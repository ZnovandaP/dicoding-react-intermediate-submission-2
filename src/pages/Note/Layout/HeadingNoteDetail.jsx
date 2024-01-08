import * as React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import clsxm from '../../../utils/clsxm';
import { showFormattedDate } from '../../../utils/initial-data';
import useLanguageContext from '../../../hooks/useLanguageContext';
import setInformationNoteByLanguage from '../../../utils/setInformationNoteByLanguage';

export default function HeadingNoteDetail({ isArchived = false, data }) {
  const { state: language } = useLanguageContext();

  return (
    <>
      <h2
        className={clsxm(
          'text-4xl sm:text-6xl font-extrabold hyphens-auto text-primary',

          isArchived && 'text-archived',
        )}
      >
        {parse(data.title)}
      </h2>

      <div className="mt-4 sm:mt-8 flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-medium opacity-70 text-lg">
          {showFormattedDate(data.createdAt, language)}
        </h3>

        <h3 className="flex gap-2 items-center font-medium text-lg text-stone-100/70">
          <span className="text-2xl text-archived">
            { data?.archived ? (<BiArchiveIn />) : (<BiArchiveOut />) }
          </span>
          { setInformationNoteByLanguage(language, {
            textID: data?.archived ? 'Catatan Diarsipkan' : 'Catatan Tidak Diarsipkan',
            TextEN: data?.archived ? 'Notes is archived' : 'Notes is\'nt archived',
          })}
        </h3>
      </div>
    </>
  );
}

HeadingNoteDetail.propTypes = {
  isArchived: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)]),
  }).isRequired,
};

HeadingNoteDetail.defaultProps = {
  isArchived: false,
};
