import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';
import { BlogContext } from "./BlogContext";


const LatestStories = () => {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);

    const {value3, value4, value5, value1, value2} = useContext(BlogContext);

    const [technology] = value3;
    const [fitness] = value4;
    const [food] = value5;
    const [bollywood] = value1;
    const [hollywood] = value2;

    const handleClick = () => {
        setLoadMore(!loadMore);
        if (loadMoreBtn === 'Load More') {
            setLoadMoreBtn('Load Less');
            setArrow(<i className="fas fa-arrow-up" style={ {color : 'orange'} }></i>);
        }
        else {
            setLoadMoreBtn('Load More');
            setArrow(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);
        }
    }


    return(
        <div className={ styles.AllSections_Main }>
            <div className={ styles.LatestStories_Top }>
                <div className={ styles.AllSections_Header }>Latest Stories</div>
                <hr className={ styles.AllSections_Header_Line }/>
            </div>
            <div className={ styles.LatestStories_Bottom }>
                <div className={ styles.LatestStories_CardContainer }>
                    {   // eslint-disable-next-line
                        technology.map( (article, index) => {
                            if(index>=technology.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        fitness.map( (article, index) => {
                            if(index>=fitness.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        food.map( (article, index) => {
                            if(index>=food.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        bollywood.map( (article, index) => {
                            if(loadMore && index>=bollywood.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        hollywood.map( (article, index) => {
                            if(loadMore && index>=hollywood.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
            </div>
        </div>
    )
}

export default LatestStories;