const Ninjas = () => {
  return (
    <div>
      <h1>Video</h1>

      <div className="row mt-5 ">
        <div className="col-sm-12 col-md-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/DY4JJfdj_4A?rel=0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
        </div>

        <div className="col-sm-12 col-md-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/x19IjNTNc1Y?rel=0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ninjas;
