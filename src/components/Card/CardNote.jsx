/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
// * components
import ButtonDeleteCard from '../button/ButtonDeleteCard';
import ButtonArchiveCard from '../button/ButtonArchiveCard';
import clsxm from '../../utils/clsxm';
import { showFormattedDate } from '../../utils/initial-data';
import useLanguageContext from '../../hooks/useLanguageContext';
import setInformationNoteByLanguage from '../../utils/setInformationNoteByLanguage';
import { archiveNote, deleteNote, unarchiveNote } from '../../service/network-data';

export default function CardNote({
  children, isArchive = false, to,
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      aria-label="Card"
      tabIndex="0"
      className={clsxm(
        'flex flex-col justify-between gap-4 max-w-full bg-stone-200/50 dark:bg-stone-800/50 border rounded-md hover:shadow-2xl focus:shadow-2xl border-primary hover:shadow-primary focus:shadow-primary  transition-all duration-300 cursor-pointer',

        isArchive && 'border-archived hover:shadow-archived focus:shadow-archived',
      )}
    >
      {children}
    </div>
  );
}

CardNote.propTypes = {
  children: PropTypes.node.isRequired,
  isArchive: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

CardNote.defaultProps = {
  isArchive: false,
};

function Head({ title, date, isArchive = false }) {
  const { state: language } = useLanguageContext();

  return (
    <section
      className="px-4 pt-4 flex flex-col gap-1"
    >
      <h3 className={clsxm(
        'flex items-center font-head text-xl tracking-wider text-primary',

        isArchive && 'text-archived',
      )}
      >
        <span className="line-clamp-1">{title}</span>
      </h3>
      <p className="font-medium tracking-wide line-clamp-1">
        {showFormattedDate(date, language)}
      </p>
    </section>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  isArchive: PropTypes.bool,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
};

Head.defaultProps = {
  isArchive: false,
};

function Body({ noteBody }) {
  return (
    <section className="px-4 pb-5">
      <div className="font-medium tracking-wider hyphens-auto line-clamp-[5]">
        {parse(noteBody)}
      </div>
    </section>
  );
}

Body.propTypes = {
  noteBody: PropTypes.string.isRequired,
};

function Foot({ id, isArchive = false }) {
  const { state: language } = useLanguageContext();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const deletedNote = React.useCallback(async () => {
    const response = await deleteNote(id);
    return response;
  }, []);

  const arvhivedNote = React.useCallback(async () => {
    const response = await archiveNote(id);
    return response;
  }, []);

  const unarchivedNote = React.useCallback(async () => {
    const response = await unarchiveNote(id);
    return response;
  }, []);

  const handleDeleteCard = (e) => {
    e.stopPropagation();
    const deletePermissions = window.confirm(language === 'id'
      ? 'Apakah anda yakin untuk menghapus catatan ini?'
      : 'Are you sure to delete this note?');

    if (deletePermissions) {
      deletedNote();
      navigate(pathname === '/' ? '/catatan' : '/');
      toast.success(language === 'id' ? 'Catatan berhasil dihapus' : 'Deleted Note is successfull');
    } else {
      toast.warn(language === 'id' ? 'Catatan tidak jadi dihapus' : 'Deleted Note is canceled');
    }
  };

  const handleChangeStateArchived = (e) => {
    e.stopPropagation();

    if (isArchive) {
      unarchivedNote();
      navigate('/');
    } else {
      arvhivedNote();
      navigate('/arsip');
    }
    toast.success(
      setInformationNoteByLanguage(language, {
        textID: isArchive ? 'Catatan dikeluarkan dari arsip' : 'Catatan berhasil diarsipkan',
        TextEN: isArchive ? 'Note unarchive is sucessfull' : 'Note has been archived',
      }),
    );
  };

  return (
    <section
      className={clsxm(
        'divide-x flex items-center border-t-[1px] divide-primary/60 border-primary/60',

        isArchive && 'divide-archived/60 border-archived/60',
      )}
    >
      <ButtonDeleteCard onClick={(e) => handleDeleteCard(e)} />
      <ButtonArchiveCard onClick={(e) => handleChangeStateArchived(e)} isArchive={isArchive} />
    </section>
  );
}

Foot.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isArchive: PropTypes.bool,
};

Foot.defaultProps = {
  isArchive: false,
};

CardNote.Head = Head;
CardNote.Body = Body;
CardNote.Foot = Foot;
