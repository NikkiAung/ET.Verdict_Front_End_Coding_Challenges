# 🏆 ET.Verdict Front End Coding Challenge

This project is a **React-based web application** that fetches and displays customer posts from an API. It features:
- **React Router** for navigation between a list and detail view.
- **Context API** for global state management.
- **Search functionality** for filtering posts.
- **Styled Components** for clean and modular styling.
- **Loading states & error handling** for a smooth user experience.

---

## 🚀 **Setup Instructions**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/NikkiAung/ET.Verdict_Front_End_Coding_Challenges.git
cd et-verdict-coding-challenge
```

### **2️⃣ Install Dependencies**
```shs
npm install
```
### **3️⃣ Create a .env File**
```shs
VITE_BACKEND_URL=https://jsonplaceholder.typicode.com/posts
```
### **4️⃣ Run the Project**
```shs
npm run dev
```
- The app will start at http://localhost:5173/

## 🎯 **Project Approach**
### **📌 1. Global State Management with Context API**
- The app uses **AppContext** to store the fetched data.
- `fetchData()` fetches **10 posts** from the API and updates global state.

### **📌 2. Routing with React Router**
- Clicking a post navigates to `/detail/:id` using `useNavigate()`.
- `useParams()` fetches the `id` and displays details dynamically.

### **📌 3. UI Features**
- **Search Bar**: Filters posts in real time.
- **Loading Indicator**: Shows a spinner while data is fetching.
- **Hover Effect on Text**: Expands text when hovered.
- **Styled Components**: Provides modular and reusable styles.

## 🛠 **Tech Stack**
- ⚛️ **React**
- 🎨 **UI Verse**
- 🔄 **React Router**
- 🌐 **Axios (for API requests)**

## 👨‍💻 **Contributing**
1. **Fork** the repo.
2. **Create** a feature branch: `git checkout -b feature-name`
3. **Commit** your changes: `git commit -m "Add new feature"`
4. **Push** to GitHub: `git push origin feature-name`
5. **Create a Pull Request (PR).**