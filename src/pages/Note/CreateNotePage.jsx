import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import Container from '../../components/Container';
import clsxm from '../../utils/clsxm';
import FloatButton from '../../components/button/FloatButton';
import useLanguageContext from '../../hooks/useLanguageContext';
import { addNote } from '../../service/network-data';

export default function CreateNotePage() {
  const { state: language } = useLanguageContext();

  const navigate = useNavigate();

  const [inputNote, setInputNote] = React.useState({
    title: '',
    body: '',
  });

  const createNote = React.useCallback(async ({ title, body }) => {
    const response = await addNote({ title, body });
    return response;
  }, []);

  const handleAddNote = () => {
    if (inputNote.title.length < 3 || inputNote.body.length < 3) {
      toast.error(
        language === 'id'
          ? 'Gagal, tolong isi form diatas'
          : 'Failed, Please input form above',
      );
      return;
    }

    createNote({
      title: inputNote.title,
      body: inputNote.body,
    });

    toast.success(
      language === 'id'
        ? 'Berhasil menambahkan catatan baru'
        : 'Create new note is successfull',
    );

    navigate('/');
  };

  return (
    <>
      <div className="px-8 mt-4 sm:mt-6 pb-10" data-aos="fade-up">
        <Container>
          <h2 className="text-xl font-medium tracking-wider">
            #Membuat Catatan Baru
          </h2>

          <input
            placeholder="Untitle"
            onChange={(e) => setInputNote({ ...inputNote, title: e.target.value })}
            value={inputNote.title}
            required
            className={clsxm(
              'text-4xl sm:text-6xl text-primary font-extrabold hyphens-auto w-full bg-transparent placeholder:text-primary py-2',

              inputNote.archived === 'YES_ARCHIVE' && 'text-archived placeholder:text-archived',
            )}
          />

          <div
            className="min-h-[15rem] mt-8 tracking-wide text-lg sm:text-xl hyphens-auto"
            contentEditable
            data-placeholder="Tuliskan Catatan mu disini...."
            onInput={(e) => setInputNote({ ...inputNote, body: e.target.innerHTML })}
          />
        </Container>
      </div>
      <FloatButton
        label="Tambahkan Catatan"
        isArchived={inputNote.archived === 'YES_ARCHIVE'}
        icon={<FaCheck />}
        onClick={handleAddNote}
      />
    </>
  );
}
