import React, { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import styles from '../AppStyles.module.css';

const Article = () => {
  const { articleTitle, articleCategory } = useParams();

  const { value1, value2, value3, value4, value5 } = useContext(BlogContext);
  const [bollywood] = value1;
  const [hollywood] = value2;
  const [technology] = value3;
  const [fitness] = value4;
  const [food] = value5;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.Article_Main}>
      <div className={styles.Article_Content}>
        {bollywood.map(
          (article, index) =>
            article.Title === articleTitle && (
              <div key={index} className={styles.Article_Card}>
                <div className={styles.Article_Card_Top}>
                  <div className={styles.Article_Card_Top1}>
                    {article.Title}
                  </div>
                  <div className={styles.Article_Card_Top2}>
                    <div className={styles.Card_Top2_Left}>
                      <div className={styles.Card_Top2_Left1}>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div className={styles.Card_Top2_Left2}>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                    <div className={styles.Card_Top2_Right}>
                      <div>
                        <i class='fab fa-facebook-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-twitter-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-instagram-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-youtube-square fa-lg'></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Article_Card_Middle}>
                  <div>
                    <img
                      className={styles.Article_Image}
                      src={article.ImageAsset}
                      alt='From the Article'
                    />
                  </div>
                  <div className={styles.AllSections_BlogContent}>
                    {article.BlogContent}
                  </div>
                </div>
                <div className={styles.Article_Card_Bottom}>
                  <div className={styles.Article_Card_Bottom1}>
                    <div>
                      <button>
                        <i class='far fa-thumbs-up fa-lg'></i>
                      </button>
                    </div>
                    <div>{article.Likes} Likes</div>
                  </div>
                  <div className={styles.Article_Card_Bottom2}>
                    <div className={styles.Article_Card_Bottom2A}>
                      <i class='fas fa-user-circle fa-3x'></i>
                    </div>
                    <div className={styles.Article_Card_Bottom2B}>
                      <div className={styles.AllSections_PublishedDate}>
                        WRITTEN BY
                      </div>
                      <div className={styles.Article_AuthorName}>
                        Author Name
                      </div>
                      <div className={styles.AllSections_PublishedDate}>
                        {article.PublishedDate} - 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        {hollywood.map(
          (article, index) =>
            article.Title === articleTitle && (
              <div key={index} className={styles.Article_Card}>
                <div className={styles.Article_Card_Top}>
                  <div className={styles.Article_Card_Top1}>
                    {article.Title}
                  </div>
                  <div className={styles.Article_Card_Top2}>
                    <div className={styles.Card_Top2_Left}>
                      <div className={styles.Card_Top2_Left1}>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div className={styles.Card_Top2_Left2}>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                    <div className={styles.Card_Top2_Right}>
                      <div>
                        <i class='fab fa-facebook-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-twitter-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-instagram-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-youtube-square fa-lg'></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Article_Card_Middle}>
                  <div>
                    <img
                      className={styles.Article_Image}
                      src={article.ImageAsset}
                      alt='From the Article'
                    />
                  </div>
                  <div className={styles.AllSections_BlogContent}>
                    {article.BlogContent}
                  </div>
                </div>
                <div className={styles.Article_Card_Bottom}>
                  <div className={styles.Article_Card_Bottom1}>
                    <div>
                      <button>
                        <i class='far fa-thumbs-up fa-lg'></i>
                      </button>
                    </div>
                    <div>{article.Likes} Likes</div>
                  </div>
                  <div className={styles.Article_Card_Bottom2}>
                    <div className={styles.Article_Card_Bottom2A}>
                      <i class='fas fa-user-circle fa-3x'></i>
                    </div>
                    <div className={styles.Article_Card_Bottom2B}>
                      <div className={styles.AllSections_PublishedDate}>
                        WRITTEN BY
                      </div>
                      <div className={styles.Article_AuthorName}>
                        Author Name
                      </div>
                      <div className={styles.AllSections_PublishedDate}>
                        {article.PublishedDate} - 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        {technology.map(
          (article, index) =>
            article.Title === articleTitle && (
              <div key={index} className={styles.Article_Card}>
                <div className={styles.Article_Card_Top}>
                  <div className={styles.Article_Card_Top1}>
                    {article.Title}
                  </div>
                  <div className={styles.Article_Card_Top2}>
                    <div className={styles.Card_Top2_Left}>
                      <div className={styles.Card_Top2_Left1}>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div className={styles.Card_Top2_Left2}>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                    <div className={styles.Card_Top2_Right}>
                      <div>
                        <i class='fab fa-facebook-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-twitter-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-instagram-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-youtube-square fa-lg'></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Article_Card_Middle}>
                  <div>
                    <img
                      className={styles.Article_Image}
                      src={article.ImageAsset}
                      alt='From the Article'
                    />
                  </div>
                  <div className={styles.AllSections_BlogContent}>
                    {article.BlogContent}
                  </div>
                </div>
                <div className={styles.Article_Card_Bottom}>
                  <div className={styles.Article_Card_Bottom1}>
                    <div>
                      <button>
                        <i class='far fa-thumbs-up fa-lg'></i>
                      </button>
                    </div>
                    <div>{article.Likes} Likes</div>
                  </div>
                  <div className={styles.Article_Card_Bottom2}>
                    <div className={styles.Article_Card_Bottom2A}>
                      <i class='fas fa-user-circle fa-3x'></i>
                    </div>
                    <div className={styles.Article_Card_Bottom2B}>
                      <div className={styles.AllSections_PublishedDate}>
                        WRITTEN BY
                      </div>
                      <div className={styles.Article_AuthorName}>
                        Author Name
                      </div>
                      <div className={styles.AllSections_PublishedDate}>
                        {article.PublishedDate} - 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        {fitness.map(
          (article, index) =>
            article.Title === articleTitle && (
              <div key={index} className={styles.Article_Card}>
                <div className={styles.Article_Card_Top}>
                  <div className={styles.Article_Card_Top1}>
                    {article.Title}
                  </div>
                  <div className={styles.Article_Card_Top2}>
                    <div className={styles.Card_Top2_Left}>
                      <div className={styles.Card_Top2_Left1}>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div className={styles.Card_Top2_Left2}>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                    <div className={styles.Card_Top2_Right}>
                      <div>
                        <i class='fab fa-facebook-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-twitter-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-instagram-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-youtube-square fa-lg'></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Article_Card_Middle}>
                  <div>
                    <img
                      className={styles.Article_Image}
                      src={article.ImageAsset}
                      alt='From the Article'
                    />
                  </div>
                  <div className={styles.AllSections_BlogContent}>
                    {article.BlogContent}
                  </div>
                </div>
                <div className={styles.Article_Card_Bottom}>
                  <div className={styles.Article_Card_Bottom1}>
                    <div>
                      <button>
                        <i class='far fa-thumbs-up fa-lg'></i>
                      </button>
                    </div>
                    <div>{article.Likes} Likes</div>
                  </div>
                  <div className={styles.Article_Card_Bottom2}>
                    <div className={styles.Article_Card_Bottom2A}>
                      <i class='fas fa-user-circle fa-3x'></i>
                    </div>
                    <div className={styles.Article_Card_Bottom2B}>
                      <div className={styles.AllSections_PublishedDate}>
                        WRITTEN BY
                      </div>
                      <div className={styles.Article_AuthorName}>
                        Author Name
                      </div>
                      <div className={styles.AllSections_PublishedDate}>
                        {article.PublishedDate} - 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        {food.map(
          (article, index) =>
            article.Title === articleTitle && (
              <div key={index} className={styles.Article_Card}>
                <div className={styles.Article_Card_Top}>
                  <div className={styles.Article_Card_Top1}>
                    {article.Title}
                  </div>
                  <div className={styles.Article_Card_Top2}>
                    <div className={styles.Card_Top2_Left}>
                      <div className={styles.Card_Top2_Left1}>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div className={styles.Card_Top2_Left2}>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                    <div className={styles.Card_Top2_Right}>
                      <div>
                        <i class='fab fa-facebook-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-twitter-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-instagram-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-youtube-square fa-lg'></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Article_Card_Middle}>
                  <div>
                    <img
                      className={styles.Article_Image}
                      src={article.ImageAsset}
                      alt='From the Article'
                    />
                  </div>
                  <div className={styles.AllSections_BlogContent}>
                    {article.BlogContent}
                  </div>
                </div>
                <div className={styles.Article_Card_Bottom}>
                  <div className={styles.Article_Card_Bottom1}>
                    <div>
                      <button>
                        <i class='far fa-thumbs-up fa-lg'></i>
                      </button>
                    </div>
                    <div>{article.Likes} Likes</div>
                  </div>
                  <div className={styles.Article_Card_Bottom2}>
                    <div className={styles.Article_Card_Bottom2A}>
                      <i class='fas fa-user-circle fa-3x'></i>
                    </div>
                    <div className={styles.Article_Card_Bottom2B}>
                      <div className={styles.AllSections_PublishedDate}>
                        WRITTEN BY
                      </div>
                      <div className={styles.Article_AuthorName}>
                        Author Name
                      </div>
                      <div className={styles.AllSections_PublishedDate}>
                        {article.PublishedDate} - 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div className={styles.Article_Related_Content}>
        <div className={styles.Related_Content_Top}>More From The Siren</div>
        <div className={styles.Related_Content_Bottom}>
          {
            // eslint-disable-next-line
            bollywood.map((article, index) => {
              if (
                article.CategoryName === articleCategory &&
                index >= bollywood.length - 5 &&
                article.Title !== articleTitle
              ) {
                return (
                  <div key={index} className={styles.Related_Content_Card}>
                    <div>
                      <img
                        className={styles.Related_Content_Image}
                        src={article.ImageAsset}
                        alt='From The Article'
                      />
                    </div>
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.AllSections_Title}
                    >
                      {article.Title}
                    </NavLink>
                    <div className={styles.Related_Content_Card_Bottom}>
                      <div>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
          {
            // eslint-disable-next-line
            hollywood.map((article, index) => {
              if (
                article.CategoryName === articleCategory &&
                index >= hollywood.length - 5 &&
                article.Title !== articleTitle
              ) {
                return (
                  <div key={index} className={styles.Related_Content_Card}>
                    <div>
                      <img
                        className={styles.Related_Content_Image}
                        src={article.ImageAsset}
                        alt='From The Article'
                      />
                    </div>
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.AllSections_Title}
                    >
                      {article.Title}
                    </NavLink>
                    <div className={styles.Related_Content_Card_Bottom}>
                      <div>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
          {
            // eslint-disable-next-line
            technology.map((article, index) => {
              if (
                article.CategoryName === articleCategory &&
                index >= technology.length - 5 &&
                article.Title !== articleTitle
              ) {
                return (
                  <div key={index} className={styles.Related_Content_Card}>
                    <div>
                      <img
                        className={styles.Related_Content_Image}
                        src={article.ImageAsset}
                        alt='From The Article'
                      />
                    </div>
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.AllSections_Title}
                    >
                      {article.Title}
                    </NavLink>
                    <div className={styles.Related_Content_Card_Bottom}>
                      <div>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
          {
            // eslint-disable-next-line
            fitness.map((article, index) => {
              if (
                article.CategoryName === articleCategory &&
                index >= fitness.length - 5 &&
                article.Title !== articleTitle
              ) {
                return (
                  <div key={index} className={styles.Related_Content_Card}>
                    <div>
                      <img
                        className={styles.Related_Content_Image}
                        src={article.ImageAsset}
                        alt='From The Article'
                      />
                    </div>
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.AllSections_Title}
                    >
                      {article.Title}
                    </NavLink>
                    <div className={styles.Related_Content_Card_Bottom}>
                      <div>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
          {
            // eslint-disable-next-line
            food.map((article, index) => {
              if (
                article.CategoryName === articleCategory &&
                index >= food.length - 5 &&
                article.Title !== articleTitle
              ) {
                return (
                  <div key={index} className={styles.Related_Content_Card}>
                    <div>
                      <img
                        className={styles.Related_Content_Image}
                        src={article.ImageAsset}
                        alt='From The Article'
                      />
                    </div>
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.AllSections_Title}
                    >
                      {article.Title}
                    </NavLink>
                    <div className={styles.Related_Content_Card_Bottom}>
                      <div>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.PublishedDate} - 10 min read
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Article;