import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const EditPost = () => {
  const [editPost, setEditPost] = useState("");
  const [postDetail, setPostDetail] = useState (null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEditPost(response.data.data.post.content);
      } catch (error) {
        Swal.fire("Error", "Failed to fetch post", "error");
      }
    };
    fetchPost();
  }, [id]);

  const handleEdit =async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
        await axios.patch(
            `${API_URL}/posts/${id}`,
            {content: editPost },
            {headers: { Authorization: `Bearer ${token}` } }
        );Swal.fire("Success", "Post updatedsuccessfully", "success");
        navigate("/");
    } catch (error) {
        Swal.fire("Error", error?.response?.data?.message ?? "Failed to update post", "error");
    }
  };

  return (
    <div>
      <h2>Edit post id: {id}</h2>
      <h4>Author: {postDetail?.author?.first_name} {postDetail?.author?.surname}</h4>
      <form onSubmit={handleEdit}>
        <textarea
          value={editPost}
          onChange={(e) => setEditPost(e.target.value)}
          cols={30}
          rows={10}
          placeholder="Edit your post"
        ></textarea>
        <button>update post</button>
      </form>
      <button onClick={() => navigate("/")}>back</button>
    </div>
  );
};

export default EditPost;
