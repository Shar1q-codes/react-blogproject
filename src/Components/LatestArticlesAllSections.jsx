import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';
import { BlogContext } from "./BlogContext";


const LatestArticlesAllSections = () => {
    const {value3, value4, value5} = useContext(BlogContext);
    const [technology] = value3;
    const [fitness] = value4;
    const [food] = value5;

    return(
        <div className={styles.AllSections_Main}>
            <div className={styles.AllSections_Top}>
                <div className={styles.AllSections_Header}>The Latest</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={styles.AllSections_Bottom}>
                {   // eslint-disable-next-line
                    technology.map(   (article,index) => {
                        if(index>=technology.length-1) {
                            return(
                                <div key={index} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.ImageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.BlogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.CategoryName  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.PublishedDate  }</span>
                                    </div>
                                </div> 
                            )
                        }
                    }
                    )    
                }
                {   // eslint-disable-next-line
                    fitness.map(   (article,index) => {
                        if(index>=fitness.length-1) {
                            return(
                                <div key={index} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.ImageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.BlogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.CategoryName  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.PublishedDate  }</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                     )    
                }
                {   // eslint-disable-next-line
                    food.map(   (article,index) => {
                        if(index>=food.length-1) {
                            return(
                                <div key={index} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.ImageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.BlogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.CategoryName  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.PublishedDate  }</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                     )    
                }
            </div>
        </div>
    )
}

export default LatestArticlesAllSections;