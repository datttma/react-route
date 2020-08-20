import React,{useState} from 'react'





export default function HomePage() {
  let [state, setState] = useState({
    like: 1
  });

  // let [like,setLike] = useState(1);


  //Tương đương this.state = {like:1};

  let handleLike = () => {
    setState({like:state.like + 1});
  }
  return (
    <div className="container">
      <div className="card text-white bg-dark" style={{width:200,height:250}}>
        <img  className="card-img-top" src="http://picsum.photos/200/200" alt />
        <div className="card-body">
          <h4 className="card-title">{state.like} ♥</h4>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleLike}>Like</button>
    </div>
  )
}
