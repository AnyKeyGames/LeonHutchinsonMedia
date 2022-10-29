import Container from 'react-bootstrap/esm/Container';

export function PortfolioModal(props:any): JSX.Element {

  return (
    <>
      <div className="portfolio-modal modal fade" id="portfolioModal1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="images/close-icon.svg" alt="Close modal" /></div>
                    <Container>
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                                  <h2 className="text-uppercase">{props.content.title}</h2>
                                  <p className="item-intro text-muted">{props.content.subheading}</p>
                                  <img className="img-fluid d-block mx-auto" src={props.content.headerImage} alt="..." />
                                  <p>{props.content.description}</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Category: </strong>
                                          {props.content.category}
                                      </li>
                                  </ul>
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-xmark me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </Container>
              </div>
          </div>
      </div>
    </>
  )
  
}
