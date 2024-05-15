import { Injectable } from '@nestjs/common';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { xboxBySlugDummy } from '../games/data-dummy/xbox';

@Injectable()
export class PlatformService {


  create(createPlatformDto: CreatePlatformDto) {
    return 'This action adds a new platform';
  }

  findAll() {
    return {
      "data": [
        {
          "id": 1,
          "attributes": {
            "title": "PlayStation",
            "slug": "playstation",
            "order": 1,
            "createdAt": "2023-09-13T09:40:59.953Z",
            "updatedAt": "2023-09-13T09:41:08.414Z",
            "publishedAt": "2023-09-13T09:41:08.408Z",
            "icon": {
              "data": {
                "id": 2,
                "attributes": {
                  "name": "icon-pc.svg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 26,
                  "height": 23,
                  "formats": null,
                  "hash": "icon_pc_7588583e69",
                  "ext": ".svg",
                  "mime": "image/svg+xml",
                  "size": 0.51,
                  "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694598041/icon_pc_7588583e69.svg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "icon_pc_7588583e69",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-09-13T09:40:39.318Z",
                  "updatedAt": "2024-01-09T18:59:51.928Z"
                }
              }
            }
          }
        },
        {
          "id": 2,
          "attributes": {
            "title": "Nintendo",
            "slug": "nintendo",
            "order": 3,
            "createdAt": "2023-09-13T09:42:53.453Z",
            "updatedAt": "2023-09-13T09:43:05.301Z",
            "publishedAt": "2023-09-13T09:42:54.864Z",
            "icon": {
              "data": {
                "id": 3,
                "attributes": {
                  "name": "icon-swt.svg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 26,
                  "height": 26,
                  "formats": null,
                  "hash": "icon_swt_df1048147d",
                  "ext": ".svg",
                  "mime": "image/svg+xml",
                  "size": 1.16,
                  "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694598170/icon_swt_df1048147d.svg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "icon_swt_df1048147d",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-09-13T09:42:48.652Z",
                  "updatedAt": "2023-09-13T09:42:48.652Z"
                }
              }
            }
          }
        },
        {
          "id": 3,
          "attributes": {
            "title": "Xbox",
            "slug": "xbox",
            "order": 2,
            "createdAt": "2023-09-13T09:44:33.002Z",
            "updatedAt": "2023-09-13T09:44:33.991Z",
            "publishedAt": "2023-09-13T09:44:33.986Z",
            "icon": {
              "data": {
                "id": 4,
                "attributes": {
                  "name": "icon-xbx.svg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 30,
                  "height": 30,
                  "formats": null,
                  "hash": "icon_xbx_c398c71fa2",
                  "ext": ".svg",
                  "mime": "image/svg+xml",
                  "size": 0.88,
                  "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694598263/icon_xbx_c398c71fa2.svg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "icon_xbx_c398c71fa2",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-09-13T09:44:21.838Z",
                  "updatedAt": "2023-09-13T09:44:21.838Z"
                }
              }
            }
          }
        },
        {
          "id": 4,
          "attributes": {
            "title": "Pc",
            "slug": "pc",
            "order": 4,
            "createdAt": "2023-09-13T09:45:13.919Z",
            "updatedAt": "2023-09-13T09:45:32.290Z",
            "publishedAt": "2023-09-13T09:45:32.284Z",
            "icon": {
              "data": {
                "id": 2,
                "attributes": {
                  "name": "icon-pc.svg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 26,
                  "height": 23,
                  "formats": null,
                  "hash": "icon_pc_7588583e69",
                  "ext": ".svg",
                  "mime": "image/svg+xml",
                  "size": 0.51,
                  "url": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1694598041/icon_pc_7588583e69.svg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "icon_pc_7588583e69",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-09-13T09:40:39.318Z",
                  "updatedAt": "2024-01-09T18:59:51.928Z"
                }
              }
            }
          }
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "pageSize": 25,
          "pageCount": 1,
          "total": 4
        }
      }
    }
  }


  getPlatformBySlug(slug: string) {
  
    const platform = this.findAll().data.find((platform) => platform.attributes.slug === slug);

    return {
      status: 200,
      data: platform
    }
  
  }






}
