   USE tech_blog_db;

  INSERT INTO user (username, email, password) VALUES
    ('test1', 'test1@gmail.com', 'password1234'),
      ('test2', 'test2@gmail.com', 'password1234'),
        ('test3', 'test3@gmail.com', 'password1234'),
        ('test4', 'test4@gmail.com', 'password1234'),
          ('test5', 'test5@gmail.com', 'password1234');


USE tech_blog_db;
INSERT INTO post (title, post_url, user_id, created_at, updated_at)
VALUES
  ('title 1', 'http://www.urlcom.post.com', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('titl 2', 'thttp://www.urlcom.post.com', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ('title 3', 'http://www.urlcom.post.com', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('title 4', 'http://www.urlcom.post.com', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('ttitle 5', 'http://www.urlcom.post.com', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
 