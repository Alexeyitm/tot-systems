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
        title: 'Базовый вектор развития продолжает удивлять',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '11.07.2022',
        type: 'inbox',
        read: true,
        marker: false,
      },
      { 
        from: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        to: 'Алексей Пономарев',
        id: 2,
        title: 'Подтверждено: объемы выросли',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '12.07.2022',
        type: 'inbox',
        read: true,
        marker: false,
      },
      { 
        from: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        to: 'Алексей Пономарев',
        id: 3,
        title: 'И по сей день в центральных регионах звучит перекатами полуночный пёсий вой',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '13.07.2022',
        type: 'inbox',
        read: false,
        marker: false,
      },
      { 
        from: 'Алексей Пономарев',
        email: 'ponomarevmgn@gmail.com',
        to: 'Иван Зайцев',
        id: 4,
        title: 'Допустим, герцог графства коронован',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '13.07.2022',
        type: 'sent',
        read: true,
        marker: false
      },
      { 
        from: 'Никита Иванов',
        email: 'ivanov@gmail.com',
        to: 'Алексей Пономарев',
        id: 5,
        title: 'Господа, чистосердечное признание облегчает душу',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '13.07.2022',
        type: 'trash',
        read: true,
        marker: false,
      },
      { 
        from: 'inco',
        email: 'inco@gmail.com',
        to: 'Алексей Пономарев',
        id: 6,
        title: 'Давайте не забывать, что сплочённость команды профессионалов расставила все точки над i',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '14.07.2022',
        type: 'spam',
        read: false,
        marker: false,
      },
      { 
        from: 'Алексей Пономарев',
        email: 'ponomarevmgn@gmail.com',
        to: 'Николай Петров',
        id: 7,
        title: 'Семантический разбор внешних противодействий связывает нас с нашим прошлым',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '15.07.2022',
        type: 'drafts',
        read: true,
        marker: true,
      },
      { 
        from: 'Алексей Пономарев',
        email: 'petrov@gmail.com',
        to: 'Никита Иванов',
        id: 8,
        title: 'И по сей день в центральных регионах звучит перекатами ласковый перезвон вертикали власти',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        date: '16.07.2022',
        type: 'drafts',
        read: true,
        marker: true,
      },
    ]
}

export default data;