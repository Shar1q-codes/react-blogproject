import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppStyles.module.css';
import { BlogContext } from './BlogContext';

const FeaturedArticlesComponent = () => {
  const { value1, value2, value3 } = useContext(BlogContext);
  const [bollywood] = value1;
  const [hollywood] = value2;
  const [technology] = value3;

  return (
    <div className={styles.featured_Articles_Component}>
      <div className={styles.featured_Articles_Left}>
        {
          // eslint-disable-next-line
          bollywood.map((article, index) => {
            if (index >= bollywood.length - 1) {
              return (
                <div
                  key={index}
                  className={styles.featured_Articles_Box_Big}
                  style={{
                    backgroundImage: `url(${article.ImageAsset})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <NavLink
                    to={`/article/${article.Title}/${article.CategoryName}`}
                    className={styles.Box_Big_Title}
                  >
                    {article.Title}
                  </NavLink>
                  <div className={styles.Box_Category_Date}>
                    <span>{article.CategoryName}</span>
                    <span> / </span>
                    <span>{article.PublishedDate}</span>
                  </div>
                </div>
              );
            }
          })
        }
      </div>
      <div className={styles.featured_Articles_Right}>
        <div className={styles.featured_Articles_Right1}>
          {
            // eslint-disable-next-line
            hollywood.map((article, index) => {
              if (index >= hollywood.length - 1) {
                return (
                  <div
                    key={index}
                    className={styles.featured_Articles_Box_Small}
                    style={{
                      backgroundImage: `url(${article.ImageAsset})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.Box_Small_Title}
                    >
                      {article.Title}
                    </NavLink>
                    <div className={styles.Box_Category_Date}>
                      <span>{article.CategoryName}</span>
                      <span> / </span>
                      <span>{article.PublishedDate}</span>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
        <div className={styles.featured_Articles_Right2}>
          {
            // eslint-disable-next-line
            technology.map((article, index) => {
              if (index >= technology.length - 1) {
                return (
                  <div
                    key={index}
                    className={styles.featured_Articles_Box_Small}
                    style={{
                      backgroundImage: `url(${
                        technology[technology.length - 1].ImageAsset
                      })`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <NavLink
                      to={`/article/${article.Title}/${article.CategoryName}`}
                      className={styles.Box_Small_Title}
                    >
                      {technology[technology.length - 1].Title}
                    </NavLink>
                    <div className={styles.Box_Category_Date}>
                      <span>
                        {technology[technology.length - 1].CategoryName}
                      </span>
                      <span> / </span>
                      <span>
                        {technology[technology.length - 1].PublishedDate}
                      </span>
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

export default FeaturedArticlesComponent;