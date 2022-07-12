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
      id: '1'
    },
  folders:
    [
      {
        name: 'Входящие',
        logo: incoming
      },
      {
        name: 'Отправленные',
        logo: sent
      },
      {
        name: 'Черновики',
        logo: drafts
      },
      {
        name: 'Удаленные',
        logo: deleted
      },
      {
        name: 'Спам',
        logo: spam
      }
    ],
  letter: 
    [
      { 
        author: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        id: '2',
        topic: 'Инцидент не исчерпан: солнечных дней всё меньше',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '11.07.2022',
        type: 'received',
        read: true,
        marker: true,
      },
      { 
        author: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        id: '2',
        topic: 'Инцидент не исчерпан: солнечных дней всё меньше',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '11.07.2022',
        type: 'received',
        read: true,
        marker: true,
      },
      { 
        author: 'Иван Зайцев',
        email: 'sdcdsdvsvf@gmail.com',
        id: '2',
        topic: 'Инцидент не исчерпан: солнечных дней всё меньше',
        text: 'Кстати, представители современных социальных резервов описаны максимально подробно.',
        data: '11.07.2022',
        type: 'received',
        read: true,
        marker: true,
      }
    ]
}

export default data;