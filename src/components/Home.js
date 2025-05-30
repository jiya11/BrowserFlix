import Hero from './Hero'

const Home = () => {
    return (
      <>
        <Hero text="🎬 Welcome to BrowserFlix"/>
        
        {/* Main Content Section */}
        <div className='container-fluid px-0'>
          {/* Hero Description */}
          <div className='bg-dark text-white py-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8 offset-lg-2 text-center'>
                  <h2 className='display-5 fw-bold mb-4'>Discover Your Next Favourite Film</h2>
                  <p className='lead mb-4'>
                    Movie Browser lets you search through thousands of films using The Movie Database API.
                    Whether you're looking for an old classic or the latest blockbuster, we've got you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className='py-5 bg-light'>
            <div className='container'>
              <div className='row g-4'>
                <div className='col-md-4'>
                  <div className='card h-100 border-0 shadow-sm'>
                    <div className='card-body text-center p-4'>
                      <div className='display-4 mb-3'>🎭</div>
                      <h5 className='card-title fw-bold'>Extensive Library</h5>
                      <p className='card-text text-muted'>
                        Browse through thousands of movies from every genre and era. From timeless classics to the latest releases.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card h-100 border-0 shadow-sm'>
                    <div className='card-body text-center p-4'>
                      <div className='display-4 mb-3'>📱</div>
                      <h5 className='card-title fw-bold'>Easy to Use</h5>
                      <p className='card-text text-muted'>
                        Simply use the search bar to find any movie by name.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card h-100 border-0 shadow-sm'>
                    <div className='card-body text-center p-4'>
                      <div className='display-4 mb-3'>📋</div>
                      <h5 className='card-title fw-bold'>Detailed Information</h5>
                      <p className='card-text text-muted'>
                        Get comprehensive details including synopsis, release dates, ratings, cast information, and high-quality posters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className='py-5 bg-primary text-white'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8 offset-lg-2 text-center'>
                  <h3 className='fw-bold mb-3'>Ready to Start Exploring?</h3>
                  <p className='lead mb-4'>
                    Use the search functionality to dive into our vast collection of films. 
                    Discover hidden gems, revisit old favorites, or find your next movie night pick.
                  </p>
                  <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                    <span className='fs-5'>🔍</span>
                    <span className='fw-semibold'>Search → Discover → Enjoy</span>
                    <span className='fs-5'>🍿</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Home;