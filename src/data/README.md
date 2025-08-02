# Hotel Data Management System

## Cấu trúc thư mục

```
src/
├── data/
│   └── hotel/
│       ├── rooms.json          # File JSON chứa dữ liệu phòng khách sạn
│       ├── guests.json         # File JSON chứa dữ liệu khách hàng
│       ├── room-details.json   # File JSON chứa chi tiết phòng
│       └── reviews.json        # File JSON chứa đánh giá khách sạn
├── services/
│   ├── hotelService.js         # Service để xử lý API calls cho phòng
│   ├── guestService.js         # Service để xử lý API calls cho khách hàng
│   └── reviewService.js        # Service để xử lý API calls cho đánh giá
├── hooks/
│   ├── useHotelRooms.js        # React hook để quản lý state phòng
│   ├── useGuests.js            # React hook để quản lý state khách hàng
│   ├── useRoomDetails.js       # React hook để quản lý chi tiết phòng
│   └── useReviews.js           # React hook để quản lý đánh giá
├── components/
│   └── Hotel/
│       ├── RoomsDataDemo.js    # Component demo để test data phòng
│       ├── GuestsDataDemo.js   # Component demo để test data khách hàng
│       ├── RoomDetailsDemo.js  # Component demo để test chi tiết phòng
│       ├── ReviewsDemo.js      # Component demo để test đánh giá
│       ├── RoomsListTable.js   # Component table hiển thị danh sách phòng
│       └── GuestsListTable.js  # Component table hiển thị danh sách khách hàng
└── pages/
    └── hotel/
        ├── DataTest/
        │   └── index.js        # Trang test data
        ├── RoomsList/
        │   └── index.js        # Trang danh sách phòng
        ├── GuestsList/
        │   └── index.js        # Trang danh sách khách hàng
        └── RoomDetails/
            └── index.js        # Trang chi tiết phòng
```

## Cách sử dụng

### 1. Thêm dữ liệu JSON mới

Để thêm dữ liệu JSON mới, bạn có thể:

1. **Thay thế các file JSON** trong thư mục `src/data/hotel/` với file JSON của bạn:
   - `rooms.json` - Dữ liệu phòng khách sạn
   - `guests.json` - Dữ liệu khách hàng
   - `room-details.json` - Chi tiết phòng
   - `reviews.json` - Đánh giá khách sạn
2. **Hoặc tạo file JSON mới** trong thư mục `src/data/hotel/` và import vào service tương ứng

### 2. Cấu trúc JSON chuẩn

File JSON phải có cấu trúc như sau:

```json
{
  "success": true,
  "message": "Rooms retrieved successfully",
  "data": {
    "rooms": [
      {
        "id": "TRZ-32",
        "roomName": "Serenity Suite",
        "hotel": {
          "id": "hotel-001",
          "name": "Elysian Grand",
          "address": "123 Luxury Street, City Center"
        },
        "bedType": "Double Bed",
        "floor": "G-02",
        "facilities": ["Wi-Fi", "AC", "TV"],
        "rate": {
          "amount": 157,
          "currency": "USD",
          "period": "night"
        },
        "status": "Available",
        "images": [
          {
            "id": "img-001",
            "url": "/images/rooms/room1.jpg",
            "alt": "Room image",
            "isPrimary": true
          }
        ],
        "capacity": {
          "adults": 2,
          "children": 1,
          "maxOccupancy": 3
        },
        "roomSize": {
          "area": 35,
          "unit": "sqm"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 50,
      "itemsPerPage": 10,
      "hasNextPage": true,
      "hasPreviousPage": false
    },
    "filters": {
      "available": {
        "statuses": ["Available", "Not Available", "Maintenance"],
        "bedTypes": ["Single Bed", "Double Bed", "Queen Bed", "King Bed"],
        "hotels": [
          {
            "id": "hotel-001",
            "name": "Elysian Grand"
          }
        ],
        "floors": ["G-01", "G-02", "1-05"]
      }
    }
  }
}
```

### 3. Sử dụng Service

```javascript
import hotelService from '../services/hotelService';

// Lấy danh sách phòng
const response = await hotelService.getRooms({
  page: 1,
  limit: 10,
  search: 'suite',
  status: 'Available'
});

// Lấy chi tiết phòng
const roomDetail = await hotelService.getRoomById('TRZ-32');

// Tạo phòng mới
const newRoom = await hotelService.createRoom(roomData);

// Cập nhật phòng
const updatedRoom = await hotelService.updateRoom('TRZ-32', updateData);

// Xóa phòng
const result = await hotelService.deleteRoom('TRZ-32');
```

### 4. Sử dụng Hook

```javascript
import { useHotelRooms } from '../hooks/useHotelRooms';

const MyComponent = () => {
  const {
    rooms,
    pagination,
    loading,
    error,
    searchRooms,
    filterRooms,
    changePage
  } = useHotelRooms();

  // Tìm kiếm
  const handleSearch = (query) => {
    searchRooms(query);
  };

  // Lọc dữ liệu
  const handleFilter = () => {
    filterRooms({
      status: 'Available',
      bedType: 'King Bed'
    });
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {rooms.map(room => (
        <div key={room.id}>{room.roomName}</div>
      ))}
    </div>
  );
};
```

### 5. Test Data

Để test dữ liệu, truy cập trang:
- `/hotel/data-test` - Trang demo với đầy đủ chức năng test
- `/hotel/rooms-list` - Trang danh sách phòng chính thức

### 6. Thêm file JSON mới

1. Tạo file JSON trong `src/data/hotel/`
2. Import vào `hotelService.js`:

```javascript
import newRoomsData from '../data/hotel/your-new-file.json';

// Thay đổi import trong service
// import roomsData from '../data/hotel/rooms.json';
import roomsData from '../data/hotel/your-new-file.json';
```

### 7. Các tính năng có sẵn

- ✅ Load dữ liệu từ JSON
- ✅ Tìm kiếm theo tên phòng, ID, tên khách sạn
- ✅ Lọc theo status, bed type, hotel, floor
- ✅ Phân trang
- ✅ Sắp xếp
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Bulk operations
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design

### 8. Mở rộng

Để mở rộng thêm tính năng:

1. **Thêm field mới**: Cập nhật cấu trúc JSON và interface
2. **Thêm filter mới**: Cập nhật `hotelService.js` và `useHotelRooms.js`
3. **Thêm API endpoint**: Tạo method mới trong `hotelService.js`
4. **Thêm validation**: Thêm validation logic trong service

## Lưu ý

- File JSON phải có cấu trúc đúng để service hoạt động
- Tất cả operations hiện tại chỉ là mock, không lưu vào database thật
- Để kết nối với backend thật, thay thế logic trong `hotelService.js`
- Component `RoomsDataDemo` chỉ dùng để test, không dùng trong production
