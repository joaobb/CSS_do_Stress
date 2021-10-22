import Button from '../../components/Button'
import React from 'react';
import styles from './Principal.module.scss';

function Principal() {
    return (
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
              <p className={styles.textHeader}>CRUD</p>
          </div>

          <div className={styles.bodyTopic}> 
            <div className={styles.topTopic}>
              
              <div className={styles.titleTopic}>
                <p className={styles.textTopic}>Tópicos</p>
                
                <div className={styles.divList}>
                  <p className={styles.listTopic}>Listagem de tópicos</p>
                </div>

              </div>
              
              <div className={styles.buttonContainer}>
                <Button />
              </div>
            </div>
            <div className={styles.bodyFirst}>
              <p>Nome</p>
              <p className={styles.optionText}>Opções</p>
            </div>
        </div>
        
        
      </div>
    );
}

export default Principal;