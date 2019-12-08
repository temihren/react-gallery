import React, { useEffect, useState } from 'react';
import {List} from 'antd';

import {getImages, getMediaObject} from 'api';

const Gallery = ({selection}) => {
    const [loading, setLoading] = useState(true);
    const [listData, setData] = useState([]);

    useEffect(() => {
        getImages({
            [selection]: true,
            limit: 10
        })
        .then(response => {
            const images = response.data.data;
            for (let i = 0; i < images.length; i++) {
                getMediaObject(images[i].image.contentUrl.split('.')[0])
                .then(response => {
                    images[i].image.fileUrl = response.data.file;
                })
            }
            setData(images);
            setLoading(false);
        })
    }, [selection])

    return (
        <>  
            {
                !loading ? (
                    <List
                        className="content"
                        grid={{
                            gutter: 30,
                            xs: 1,
                            sm: 1,
                            md: 3,
                            lg: 5,
                            xl: 5,
                            xxl: 5
                        }}
                            pagination={{
                            pageSize: 15
                        }}
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item
                                key={item.id}
                                // onClick={() => handleShowDialog(item)}
                                extra={
                                    <img className="preview__img" src={item.image.fileUrl} alt={item.title} />
                                }
                            />
                        )}
                    />
                ) : <div>PRELOADER</div>
            }
            <div>{selection}</div>
        </>
    );
};

export default Gallery;