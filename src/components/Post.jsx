import React, {useEffect} from "react";

export default function Post(props) {
    useEffect(() => {
        document.title = props.post.name;
    });
    const Rating = () => {
        if (props.post.rating?.kp > 8) return (<div className="rating" style={{ color: '#ffd25e'}}>{props.post.rating?.kp}</div>);
        else if (props.post.rating?.kp > 7) return (<div className="rating" style={{ color: '#3BB33B'}}>{props.post.rating?.kp}</div>);
        else if (props.post.rating?.kp < 5) return (<div className="rating" style={{ color: '#F00'}}>{props.post.rating?.kp}</div>);
        else return (<div className="rating" style={{ color: '#FFF'}}>{props.post.rating?.kp}</div>);
    }
    return (
    <div className="post">
        <img className="poster" src={props.post?.backdrop?.url} alt=''/>
        <div className="card">
            <div className="title">{props.post.name} ({props.post.year})</div>
            <div className="rate">
                Рейтинг
                <Rating/>
                <div className="votes" >({props.post.votes?.kp} оценок)</div>
            </div>
            <div className="body">{props.post.description}</div>
            <div className="genres">Жанр: {props.post.genres?.map(e => e.name + '   ')}</div>
            <div className="links">
                <a href={`https://www.kinopoisk.ru/film/${props.post.id}`} target="_blank" rel="noreferrer" className="toKP">Подробнее на КиноПоиск</a>
            </div>
        </div>
    </div>
    );
}