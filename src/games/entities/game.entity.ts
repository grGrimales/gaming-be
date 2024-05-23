/* Generar schema de mongoose para la entidad Game  con esta estructura 

    {
            "id": 2,
            "attributes": {
                "title": "Hogwarts Legacy",
                "price": 89,
                "discount": 5,
                "slug": "hogwarts-legacy",
                "summary": "Hogwarts Legacy es un RPG de acción en un mundo abierto ambientado en el universo de los libros de Harry Potter. Por primera vez, disfruta de Hogwarts en el siglo XIX. Tu personaje es un estudiante que tiene la clave de un antiguo secreto que amenaza con destruir el mundo mágico. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico. La leyenda de Hogwarts es tuya. Crea tu propio legado",
                "video": "https://youtu.be/QjeYtrpTv-o?si=m1Nnjd_jzU1bQgg6",
                "realeaseDate": "2022-09-01",
                "createdAt": "2023-09-17T10:12:32.914Z",
                "updatedAt": "2024-01-01T18:19:18.724Z",
                "publishedAt": "2023-09-17T10:12:34.939Z",
                "platform": {
                    "data": {
                        "id": 3,
                        "attributes": {
                            "title": "Xbox",
                            "slug": "xbox",
                            "order": 2,
                            "createdAt": "2023-09-13T09:44:33.002Z",
                            "updatedAt": "2023-09-13T09:44:33.991Z",
                            "publishedAt": "2023-09-13T09:44:33.986Z"
                        }
                    }
                },
                "cover": {
                    "data": {
                        "id": 17,
                        "attributes": {
                            "name": "hogwarts-legacy-cover.jpg",
                            "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945500/hogwarts_legacy_cover_12ce97830e.jpg",
                            "createdAt": "2023-09-17T10:11:39.653Z",
                            "updatedAt": "2023-09-17T10:11:39.653Z"
                        }
                    }
                },
                "wallpaper": {
                    "data": {
                        "id": 16,
                        "attributes": {
                            "name": "hogwarts-legacy-wallpaper.jpg",
                            "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945486/hogwarts_legacy_wallpaper_90c66e2d17.jpg",
                            "createdAt": "2023-09-17T10:11:26.557Z",
                            "updatedAt": "2023-09-17T10:11:26.557Z"
                        }
                    }
                },
                "screenshots": {
                    "data": [
                        {
                            "id": 18,
                            "attributes": {
                                "name": "hogwarts-legacy-04.jpeg",
                                "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945510/hogwarts_legacy_04_1191974b8c.jpg",
                                "createdAt": "2023-09-17T10:11:48.387Z",
                                "updatedAt": "2023-09-17T10:11:48.387Z"
                            }
                        },
                        {
                            "id": 19,
                            "attributes": {
                                "name": "hogwarts-legacy-02.jpeg",
                                "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945510/hogwarts_legacy_02_3ded82f8d9.jpg",
                                "createdAt": "2023-09-17T10:11:48.524Z",
                                "updatedAt": "2023-09-17T10:11:48.524Z"
                            }
                        },
                        {
                            "id": 20,
                            "attributes": {
                                "name": "hogwarts-legacy-03.jpeg",
                                "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945510/hogwarts_legacy_03_4d49f60569.jpg",
                        	
                                "createdAt": "2023-09-17T10:11:48.647Z",
                                "updatedAt": "2023-09-17T10:11:48.647Z"
                            }
                        },
                        {
                            "id": 21,
                            "attributes": {
                                "name": "hogwarts-legacy-01.jpeg",
                                "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945509/hogwarts_legacy_01_e94eebf88b.jpg",
                        	
                                "createdAt": "2023-09-17T10:11:49.751Z",
                                "updatedAt": "2023-09-17T10:11:49.751Z"
                            }
                        },
                        {
                            "id": 22,
                            "attributes": {
                                "name": "hogwarts-legacy-05.jpeg",
                                "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694945511/hogwarts_legacy_05_c17c130332.jpg",
                                "createdAt": "2023-09-17T10:11:50.581Z",
                                "updatedAt": "2023-09-17T10:11:50.581Z"
                            }
                        }
                    ]
                }
            }
        },

*/

import mongoose, { Schema, Document } from 'mongoose';


export interface Game extends Document {

    attributes: {
        title: string,
        price: number,
        discount: number,
        slug: string,
        summary: string,
        video: string,
        realeaseDate: Date,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date,
        platform: {
            data: {
                id: number,
                attributes: {
                    title: string,
                    slug: string,
                    order: number,
                    createdAt: Date,
                    updatedAt: Date,
                    publishedAt: Date,
                }
            }
        },
        cover: {
            data: {
                id: number,
                attributes: {
                    name: string,
                    url: string,
                    createdAt: Date,
                    updatedAt: Date,
                }
            }
        },
        wallpaper: {
            data: {
                id: number,
                attributes: {
                    name: string,
                    url: string,
                    createdAt: Date,
                    updatedAt: Date,
                }
            }
        },
        screenshots: {
            data: [{
                id: number,
                attributes: {
                    name: string,
                    url: string,
                    createdAt: Date,
                    updatedAt: Date,
                }
            }]
        }

    }
}

export const GameSchema: Schema = new Schema({
    attributes: {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        discount: { type: Number, required: false },
        slug: { type: String, required: true },
        summary: { type: String, required: true },
        video: { type: String, required: true },
        realeaseDate: { type: Date, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
        publishedAt: { type: Date, required: true },
        platform: {
            data: {
                id: { type: Number, required: true },
                attributes: {
                    title: { type: String, required: true },
                    slug: { type: String, required: true },
                    order: { type: Number, required: true },
                    createdAt: { type: Date, required: true },
                    updatedAt: { type: Date, required: true },
                    publishedAt: { type: Date, required: true },
                }
            }
        },
        cover: {
            data: {
                id: { type: Number, required: true },
                attributes: {
                    name: { type: String, required: true },
                    url: { type: String, required: true },
                    createdAt: { type: Date, required: true },
                    updatedAt: { type: Date, required: true },
                }
            }
        },
        wallpaper: {
            data: {
                id: { type: Number, required: true },
                attributes: {
                    name: { type: String, required: true },
                    url: { type: String, required: true },
                    createdAt: { type: Date, required: true },
                    updatedAt: { type: Date, required: true },
                }
            }
        },
        screenshots: {
            data: [{
                id: { type: Number, required: true },
                attributes: {
                    name: { type: String, required: true },
                    url: { type: String, required: true },
                    createdAt: { type: Date, required: true },
                    updatedAt: { type: Date, required: true },
                }
            }]
        }
    }

});


export default mongoose.model<Game>('Game', GameSchema);
