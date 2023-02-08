import './App.css';
import logo from './img/logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-dark">
        <h1 className="jumbotron text-center">Portofolio</h1>
        {/* header */}
        <section className="header">
          <img src={logo} width="200" className="logo" />
          <div className="p-1"></div>
          <h3 className="text-white">Muhammad Ikhsan</h3>
          <div className="p-1"></div>
          <p className="fw-bold text-white">Creator | Developer web | Developer game</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,138.7C672,107,768,85,864,101.3C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        {/* end header */}
        {/* about */}
        <section className="about" id="about">
          <div className="bg-white">
            <h2>about</h2>
            <div className="p-2"></div>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae nemo sit aut. Ipsam minus incidunt magnam fuga commodi maiores consequatur repudiandae esse ipsum soluta quaerat, fugit, delectus suscipit
                  voluptas.
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae nemo sit aut. Ipsam minus incidunt magnam fuga commodi maiores consequatur repudiandae esse ipsum soluta quaerat, fugit, delectus suscipit
                  voluptas.
                </p>
              </div>
            </div>
          </div>
          <div className="p-5"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#212529"
              fill-opacity="1"
              d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,160C672,160,768,224,864,224C960,224,1056,160,1152,112C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        {/* end about */}
        {/* project */}
        <section className="bg-dark text-white text-center" id="project">
          <div className="mb-3"></div>
          <h2>Project</h2>
          <div className="p-2"></div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio officiis beatae provident obcaecati tenetur ab alias, quo maiores magnam recusandae modi minus, voluptates ut doloribus sit iste. Autem, rerum sint.</p>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste autem ipsa aliquam, blanditiis molestiae eius laborum modi dignissimos, iusto, voluptates odio eaque iure voluptas nihil voluptatum ipsum accusantium officia
                dolor.
              </p>
            </div>
          </div>
          <div className="p-5"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,32L48,26.7C96,21,192,11,288,37.3C384,64,480,128,576,128C672,128,768,64,864,69.3C960,75,1056,149,1152,181.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        {/* end project */}
        {/* contact */}
        <section className="bg-white" id="contact">
          <h2 className="text-center">Contact</h2>
          <div className="container">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="email" aria-describedby="email" />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" id="name" aria-describedby="email" />
              </div>
              <div className="mb-3">
                <label for="komen">Comments</label>
                <textarea name="komen" id="komen" className="form-control"></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">submit</button>
              </div>
            </form>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#212529"
              fill-opacity="1"
              d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,197.3C672,181,768,139,864,122.7C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        {/* end contact */}
        {/* footer */}
        <footer id="footer" className="bg-dark pb-5">
          <p className="fw-bold text-white text-center">Created by ikhsan</p>
        </footer>
        {/* end footer */}
      </header>
    </div>
  );
}

export default App;
