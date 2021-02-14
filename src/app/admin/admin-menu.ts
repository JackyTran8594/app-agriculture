import { NbMenuItem } from '@nebular/theme';


export const ADMIN_MENU: NbMenuItem[] = [
    {
        title: 'Post',
        icon: 'book-open-outline',
        link: 'admin/post',
        home: true
    },
    {
        title: 'Category',
        icon: 'list-outline',
        link: 'admin/category',
    }
    ,
    {
        title: 'Role',
        icon: 'lock-outline',
        link: 'admin/role',
    }
    ,
    {
        title: 'Tag',
        icon: 'pricetags-outline',
        link: 'admin/tag',
    }
    ,
    {
        title: 'User',
        icon: 'people-outline',
        link: 'admin/user',
    }
]
