const Card = () => {
    return (
            <div className="card cardBody">
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="random photo" />
                <div className="card-body">
                    <h5 className="card-title">Have some random photos!</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et tortor facilisis, ornare nulla non.</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
    );
};
export default Card;