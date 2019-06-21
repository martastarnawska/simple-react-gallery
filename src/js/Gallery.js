import React from 'react';
import Image from './Image';
import Next from './Next'
import '../scss/Gallery.scss';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idList: null,
            display: null
        };
    }

    componentDidMount() {
        fetch(`https://picsum.photos/v2/list`)
            .then(resp => {
                if (!resp.ok) {
                    throw Error(resp.statusText)
                }
                return resp
            })
            .then(resp => resp.json())
            .then(resp => {
                let arr = resp;
                let idList = arr.map(item => {
                    let urlParts = item.url.split("/");
                    let id = urlParts[urlParts.length - 1];
                    return id;
                })
                this.setState({
                    idList: idList,
                    display: idList.slice(0, 3)
                })

            })
            .catch((error) => {
                console.log(error)
            });
    };

    paginationCallback = (page) => {
        if (page < 10) {
            let list = this.state.idList;
            let start = page * 3;
            let piece = list.slice(start, start + 3);
            this.setState({
                display: piece
            });
        }
    }

    render() {
        return (
            <main className="Gallery">
                <section className="Gallery__wrapper">
                    {
                        this.state.display ?
                            this.state.display.map(id =>
                                <Image
                                    id={id}
                                    key={id} />
                            )
                            : <h3>no images</h3>
                    }
                </section>
                <Next setPageNumber={this.paginationCallback} />
            </main>
        )
    }
}

export default Gallery;