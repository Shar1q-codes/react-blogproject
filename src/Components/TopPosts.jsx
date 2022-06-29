import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import styles from '../AppStyles.module.css';
import { NavLink } from "react-router-dom";


const TopPosts = () => {
    const {value1, value2, value3, value4, value5} = useContext(BlogContext);
    const [bollywood] = value1;
    const [hollywood] = value2;
    const [technology] = value3;
    const [fitness] = value4;
    const [food] = value5;

    let tempArr = [];
    let tempArrFinal = [];

    const max1 = bollywood.reduce( (prev, current) => (prev.likes > current.likes) ? prev : current);
    const max2 = hollywood.reduce( (prev, current) => (prev.likes > current.likes) ? prev : current);
    const max3 = technology.reduce( (prev, current) => (prev.likes > current.likes) ? prev : current);
    const max4 = fitness.reduce( (prev, current) => (prev.likes > current.likes) ? prev : current);
    const max5 = food.reduce( (prev, current) => (prev.likes > current.likes) ? prev : current);

    tempArr.push(max1, max2, max3, max4, max5);
    tempArrFinal = tempArr.sort(    (prev, current) => parseFloat(current.likes) - parseFloat(prev.likes));
    console.log(tempArrFinal);






    return(
        <div className={ styles.topPosts_Main }>
            <div className={ styles.topPosts_Top}>
                <div className={styles.AllSections_Header}>Top Posts</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={ styles.topPosts_Bottom}>
                {   // eslint-disable-next-line
                    tempArrFinal.map( (object, index) => {
                        if(index === 0) {
                            return(
                                <div className={styles.topPosts_CardPrimary} key={index}>
                                    <div className={styles.cardPrimary_Top}><img className={styles.cardPrimary_Image} src={ object.ImageAsset } alt="From the article" /></div>
                                    <div className={styles.cardPrimary_Bottom}>
                                        <div className={styles.cardPrimary_Bottom1}>
                                            <NavLink to={`/article/${object.Title}/${object.CategoryName}`} className={ styles.category1_Title }>{ object.Title }</NavLink>
                                            <div>
                                                <span className={ styles.category1_CategoryName }>{ object.CategoryName }</span>
                                                <span className={ styles.category1_PublishedDate }> / { object.PublishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardPrimary_Bottom2}>{ index+1 }</div>
                                    </div>
                                </div>
                            )
                        }

                        if(index !== 0) {
                            return(
                                <div className={styles.topPosts_CardSecondary} key={index}>
                                    <div className={styles.cardSecondary_Left}><img className={styles.cardSecondary_Image} src={ object.ImageAsset } alt="From the article" /></div>
                                    <div className={styles.cardSecondary_Right}>
                                        <div className={styles.cardSecondary_Right1}>
                                            <NavLink to={`/article/${object.Title}/${object.CategoryName}`} className={ styles.cardSecondary_Title }>{ object.Title }</NavLink>
                                            <div>
                                                <span className={ styles.cardSecondary_CategoryName }>{ object.CategoryName }</span>
                                                <span className={ styles.cardSecondary_PublishedDate }> / { object.PublishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardSecondary_Right2}>{ index+1 }</div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default TopPosts;