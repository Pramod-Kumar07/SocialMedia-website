import React from 'react';
import feedData from '../feedData';
import styles from './MiddleSection.module.css';
import { FaRegComment, FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FiSend , FiBookmark} from 'react-icons/fi';
import TextField from '@mui/material/TextField';

function MiddleSection() {
  return (
    <div className={styles.feedContainer}>
      <div className={styles.storiesContainer}>
        {
          feedData.map((e)=>{
            return(
              <div className={styles.stories}>
                <img src={e.sharedBy.dp} />
              </div>
            )
          })
        }
      </div>
      
      
      {
      feedData.map((e) =>{
        return(
          <div className={styles.feedCard}>

            <div className={styles.userDetails}>
              <div className={styles.userPhoto}>                
                <img src={e.sharedBy.dp} alt={<FaRegUserCircle/>} />
              </div>
              <div className={styles.userName}>
                <b>{e.sharedBy.name}</b>
                <p>{e.createdAt}</p>
              </div>
              <div className={styles.userMore}>
                <HiDotsHorizontal/>
              </div>
            </div>

            <div className={styles.feedImage}>
              <img src={e.image} alt='PostImage' />
            </div>

            <div className={styles.icons}>
              <div>
                <FaRegHeart/>
                <FaRegComment/>
                <FiSend/>
              </div>
              <div><FiBookmark/></div>
            </div>

            <div className={styles.likesCount}>
              {e.likeCount} likes
            </div>

            <div className={styles.caption}>
              <div>
              <b>{e.sharedBy.name}</b>                
              <span>lorem lui sdoo eiiid</span>
              </div>
              {e.content}              
            </div>

            <div className={styles.comments}>
              <span>View all {e.commentCount} comments</span>              
              <span className={styles.textField} ><TextField id="standard-basic" label="Add a comment..." variant="standard" style={{width:'100%', boxSizing:'border-box', padding:'0'}} /></span>
            </div>


          </div>
        )
      })
    }</div>
  )
}

export default MiddleSection