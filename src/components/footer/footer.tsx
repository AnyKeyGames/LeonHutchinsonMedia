import Container from 'react-bootstrap/esm/Container';
import '../../core/css/core.css';

export function Footer(): JSX.Element {

  return (
    <>
        <footer className="footer py-4">
            <Container>
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; LH Media 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a> */}
                        {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                </div>
            </Container>
        </footer>
    </>
  )
  
}
