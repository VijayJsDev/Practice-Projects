import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [deleteLoading, setDeleteLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postMessage, setPostMessage] = useState("");


  const modalOpenHandler = () => {
    setShowModal(true);
  };
  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const fetchedPosts = response.data;
      setPosts(fetchedPosts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };


  const deletePost = async (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    const newPost = {
      userId: Date.now(),
      title: postTitle,
      body: postMessage,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((res) => {
        console.log(res.data);
        modalCloseHandler();
      });
      
      fetchPosts();
    setPostMessage("");
    setPostTitle("");
  };

  /* const newPost = {
      userId: Date.now(),
      id: Date.now(),
      title: postTitle,
      body: postMessage,
    };

    axios.post("https://jsonplaceholder.typicode.com/posts", newPost).then((res) => console.log(res))
    modalCloseHandler();*/
  return (
    <>
      <Container>
        <h1>Posts</h1>

        <div>
          <div>
            <Button onClick={fetchPosts}>See All Posts</Button>
            <Button variant="success" onClick={modalOpenHandler}>
              Add Post
            </Button>
            <Modal show={showModal} onHide={modalCloseHandler}>
              <Modal.Header closeButton>
                <h3>Add New Post</h3>
              </Modal.Header>
              <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group
                    controlId="validationCustom01"
                    className="mt-3 mb-3"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Post Name"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      required
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      Title Cannot Be Empty
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  <Form.Group
                    controlId="validationCustom02"
                    className="mt-3 mb-3"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Your Message"
                      value={postMessage}
                      onChange={(e) => setPostMessage(e.target.value)}
                      required
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      Message Cannot Be Empty
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
            {loading && (
              <Spinner
                variant="info"
                animation="border"
                role="status"
                class="container text-center"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {posts.map((post, index) => (
              <Card
                key={post.id}
                style={{ listStyle: "none" }}
                className="mt-5 mb-5"
              >
                <Card.Header>Title: {post.title}</Card.Header>
                <Card.Body>
                  <Card.Subtitle>ID:{post.id}</Card.Subtitle>
                  <Card.Text>Content: {post.body}</Card.Text>
                  <Button
                    className="justify-content-end"
                    variant="danger"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Posts;
