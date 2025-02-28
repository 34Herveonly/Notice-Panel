import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Notice {
  id: number;
  title: string;
  content: string;
}

interface EditNoticeProps {
  notices: Notice[];
  setNotices: React.Dispatch<React.SetStateAction<Notice[]>>;
}

const EditNotice: React.FC<EditNoticeProps> = ({ notices, setNotices }) => {
  const { id } = useParams();
  const noticeId = Number(id);

  const notice = notices.find((n) => n.id === noticeId);
  const [title, setTitle] = useState<string>(notice?.title || "");
  const [content, setContent] = useState<string>(notice?.content || "");

  useEffect(() => {
    if (notice) {
      setTitle(notice.title);
      setContent(notice.content);
    }
  }, [notice]);

  const handleSave = () => {
    setNotices((prevNotices) =>
      prevNotices.map((n) =>
        n.id === noticeId ? { ...n, title, content } : n
      )
    );
    window.close();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Edit Notice</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border w-96 mb-4"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border w-96 h-40 mb-4"
      />
      <button onClick={handleSave} className="p-2 bg-green-600 text-white rounded">
        Save Changes
      </button>
    </div>
  );
};

export default EditNotice;
