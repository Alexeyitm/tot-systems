import incoming from '../images/folders/incoming.png'
import sent from '../images/folders/sent.png'
import drafts from '../images/folders/drafts.png'
import deleted from '../images/folders/deleted.png'
import spam from '../images/folders/spam.png'

const data = {
  user:
    {
      name: 'Алексей Пономарев',
      email: 'ponomarevmgn@gmail.com',
      id: 1
    },
  folders:
    [
      {
        name: 'Входящие',
        path: 'inbox',
        logo: incoming,
        id: 1
      },
      {
        name: 'Отправленные',
        path: 'sent',
        logo: sent,
        id: 2
      },
      {
        name: 'Черновики',
        path: 'drafts',
        logo: drafts,
        id: 3
      },
      {
        name: 'Удаленные',
        path: 'trash',
        logo: deleted,
        id: 4
      },
      {
        name: 'Спам',
        path: 'spam',
        logo: spam,
        id: 5
      }
    ],
  letter: 
    [
      { 
        from: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        to: 'Алексей Пономарев',
        id: 1,
        title: 'inbox',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '11.07.2022',
        type: 'inbox',
        read: true,
        marker: false,
      },
      { 
        author: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        to: 'Алексей Пономарев',
        id: 2,
        title: 'inbox',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '12.07.2022',
        type: 'inbox',
        read: true,
        marker: false,
      },
      { 
        author: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        to: 'Алексей Пономарев',
        id: 3,
        title: 'inbox',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '13.07.2022',
        type: 'inbox',
        read: false,
        marker: false,
      },
      { 
        author: 'Алексей Пономарев',
        email: 'ponomarevmgn@gmail.com',
        to: 'Иван Зайцев',
        id: 4,
        title: 'sent',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '13.07.2022',
        type: 'sent',
        marker: false,
      },
      { 
        author: 'Никита Иванов',
        email: 'ivanov@gmail.com',
        to: 'Алексей Пономарев',
        id: 5,
        title: 'trash',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '13.07.2022',
        type: 'trash',
        read: true,
        marker: false,
      },
      { 
        author: 'inco',
        email: 'inco@gmail.com',
        to: 'Алексей Пономарев',
        id: 6,
        title: 'spam',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '14.07.2022',
        type: 'spam',
        read: false,
        marker: false,
      },
      { 
        author: 'Алексей Пономарев',
        email: 'ponomarevmgn@gmail.com',
        to: 'Николай Петров',
        id: 7,
        title: 'drafts',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '15.07.2022',
        type: 'drafts',
        marker: false,
      },
      { 
        author: 'Алексей Пономарев',
        email: 'petrov@gmail.com',
        to: 'Никита Иванов',
        id: 8,
        title: 'drafts',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '16.07.2022',
        type: 'drafts',
        marker: false,
      },
    ]
}

export default data;