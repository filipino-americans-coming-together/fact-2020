import React from 'react'

import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

const ImageHeader = ({ imageURL, children }) => {
  const image = {
    width:'100%',
    height:'800px',
    marginTop: '55px',
    background: `
    linear-gradient(rgba(249,186,169,1)0%, rgba(30,30,30,0.3) 10%, rgba(30,30,30,0.3) 90%, rgba(249,186,169,1)),
      no-repeat center url(${imageURL})
    `,
    backgroundSize: 'cover',
  }
  return (
    <div className={styles.background} style={image}>
      <Col md={12} className={`text-center fontMoam ${styles.titleContainer}`}>
        { children }
      </Col>
    </div>
  )
}
export default ImageHeader
