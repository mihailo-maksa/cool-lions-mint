import React from 'react'
import './layout.css'
// import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import errorImg from '../assets/error-img.png'

const ErrorPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

  return (
    <>
      <div style={{ height: '100px' }} />
      <section
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '30px',
        }}
      >
        <h1
          className="x-large not-found-title bold"
          title="Page Not Found"
          style={{ textAlign: 'center' }}
        >
          <i
            className="fas fa-exclamation-triangle"
            style={{ color: '#e84143' }}
          />{' '}
          <span className="white-text bold">Site Under Construction</span>
        </h1>
        <p className="come-back-later mt-2 ml-2 text-center white-text">
          We are working hard to prepare for the Cool Lions NFT mint!
        </p>
        {/*<button
          className="btn btn-primary regular-btn bold border-rad-05 back-to-vaults-btn"
          type="button"
          onClick={() => window.history.back()}
        >
          <Link
            to="/"
            className="trade-card-analytics-link"
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.175rem',
            }}
          >
            ↩ Go Back
          </Link>
          </button>*/}
        <img
          className="img-not-found"
          src={errorImg}
          alt="Page Not Found"
          style={{
            display: 'inline-block',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: isMobile ? '400px' : '700px',
            height: isMobile ? '50vh' : '60vh',
          }}
        />
      </section>
    </>
  )
}

export default ErrorPage
