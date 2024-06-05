import React from 'react';

export const FeedbackEmail = ({
    first,
    second,
  email,
    designation,
    feedback
}: {
    first: string;
    second: string;
    email: string;
    designation: string;
    feedback: string;
}) => {
  const styles = {
    emailContainer: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      backgroundColor:'#ffffff',
      height: '100vh',
      width:'100vw'
    },
    header: {
      backgroundColor: '#f7f7f7',
      padding: '10px',
      borderBottom: '1px solid #ddd',
      textAlign: 'center' as 'center',
    },
    content: {
      padding: '20px',
    },
    footer: {
      backgroundColor: '#f7f7f7',
      padding: '10px',
      borderTop: '1px solid #ddd',
      textAlign: 'center' as 'center',
      fontSize: '12px',
      color: '#777',
    },
    feedbackButton: {
      display: 'inline-block',
      margin: '20px 0',
      padding: '10px 20px',
      backgroundColor: '#f7f7f7',
      borderRadius: '5px',
      textDecoration: 'none',
      color: '#777',
    },
  };

  return (
    <div style={styles.emailContainer}>
      <div style={styles.header}>
        <h2>Feedback Alert</h2>
      </div>
      <div style={styles.content}>
        <p>Dear Samrat,</p>
        <p>
          A new feedback from {first} {second} has of designation {designation} been received.
          <br />
          It has been taken from <i>{email}</i> email address.
          <br />
          Here is the feedback:
        </p>
        <p style={styles.feedbackButton}>
          {feedback}
        </p>
      </div>
      <div style={styles.footer}>
        <p>colddsam | samrat@colddsam.xyz | www.colddsam.xyz</p>
      </div>
    </div>
  );
}


