/* eslint-disable no-alert */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { GoTrash } from 'react-icons/go';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';
import useLanguageContext from '../../hooks/useLanguageContext';
import setInformationNoteByLanguage from '../../utils/setInformationNoteByLanguage';
import { archiveNote, deleteNote, unarchiveNote } from '../../service/network-data';

export default function MenuDetailNote({ data, isArchived = false }) {
  const { state: language } = useLanguageContext();

  const navigate = useNavigate();

  const arvhivedNote = React.useCallback(async () => {
    const response = await archiveNote(data.id);
    return response;
  }, []);

  const unarchivedNote = React.useCallback(async () => {
    const response = await unarchiveNote(data.id);
    return response;
  }, []);

  const deletedNote = React.useCallback(async () => {
    const response = await deleteNote(data.id);
    return response;
  }, []);

  const handleDeleteCard = (e) => {
    e.stopPropagation();
    const deletePermissions = window.confirm(language === 'id'
      ? 'Apakah anda yakin untuk menghapus catatan ini?'
      : 'Are you sure to delete this note?');

    if (deletePermissions) {
      deletedNote();
      toast.success(language === 'id' ? 'Catatan berhasil dihapus' : 'Deleted Note is successfull');
      navigate('/');
    } else {
      toast.warn(language === 'id' ? 'Catatan tidak jadi dihapus' : 'Deleted Note is canceled');
    }
  };

  const handleChangeStateArchived = (e) => {
    e.stopPropagation();

    if (isArchived) {
      unarchivedNote();
      navigate('/catatan');
    } else {
      arvhivedNote();
      navigate('/arsip');
    }

    toast.success(
      setInformationNoteByLanguage(language, {
        textID: isArchived ? 'Catatan dikeluarkan dari arsip' : 'Catatan berhasil diarsipkan',
        TextEN: isArchived ? 'Note unarchive is sucessfull' : 'Note has been archived',
      }),
    );
  };

  return (
    <div className={clsxm(
      'fixed bottom-36 right-8 flex flex-col divide-y',

      'bg-stone-900 rounded-lg ring-1 ring-primary divide-primary',

      isArchived && 'ring-archived divide-archived',
    )}
    >
      <button
        type="button"
        className="flex items-center gap-2 py-3 px-6  text-red-600 hover:opacity-75"
        onClick={(e) => handleDeleteCard(e)}
      >
        <span className="text-2xl">
          <GoTrash />
        </span>
        {language === 'id' ? 'Hapus catatan' : 'Delete this note'}
      </button>

      <button
        type="button"
        className="flex items-center gap-2 py-3 px-6 text-archived hover:opacity-75"
        onClick={(e) => handleChangeStateArchived(e)}
      >
        <span className="text-2xl">
          { data.archived ? (<BiArchiveIn />) : (<BiArchiveOut />) }
        </span>

        { setInformationNoteByLanguage(language, {
          textID: data.archived ? 'Keluarkan dari arsip' : 'Arsipkan catatan',
          TextEN: data?.archived ? 'Note unarchived' : 'Archive this note',
        })}

      </button>
    </div>
  );
}

MenuDetailNote.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  }).isRequired,
  isArchived: PropTypes.bool,
};

MenuDetailNote.defaultProps = {
  isArchived: false,
};
