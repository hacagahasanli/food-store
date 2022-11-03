import React, { Fragment } from "react";
import {
  BlogPost,
  PostItem,
  PostImageContainer,
  PostImage,
  PostTextContainer,
  DateComInfos,
  ReleaseDate,
  PostComment,
  PostName,
  PostInfos,
  posts,
} from "../../index";

const PostBlog = () => {
  return (
    <Fragment>
      {posts.map((post) => (
        <BlogPost key={post.id}>
          <PostItem>
            <PostImageContainer>
              <PostImage src={post.image} alt="blog1" />
            </PostImageContainer>
            <PostTextContainer>
              <DateComInfos>
                <ReleaseDate>
                  <ion-icon name="calendar-clear-outline"></ion-icon>
                  {post.date}
                </ReleaseDate>
                <PostComment>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </PostComment>
                {post.comments}
              </DateComInfos>
              <PostName>
                <a href="/#">{post.name}</a>
              </PostName>
              <PostInfos>{post.about}</PostInfos>
            </PostTextContainer>
          </PostItem>
        </BlogPost>
      ))}
    </Fragment>
  );
};

export default PostBlog;
