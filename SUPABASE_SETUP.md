# Supabase Setup Guide for Jersey Kingdom

## ✅ What's Connected

Your Jersey Kingdom e-commerce store is now fully integrated with Supabase:

### 1. **Authentication**
- ✅ Sign Up with email and password
- ✅ Sign In functionality
- ✅ Auto logout on inactivity
- ✅ Session persistence

### 2. **Cart Management**
- ✅ Save cart to database (per user)
- ✅ Load cart on login
- ✅ Add/Remove items
- ✅ Cart syncs across devices

### 3. **Orders**
- ✅ Create orders from cart
- ✅ Track order history
- ✅ Order status tracking

### 4. **User Profile**
- ✅ Store user name and email
- ✅ Order history tracking

---

## 🔧 Required Supabase Setup

Create these tables in your Supabase database:

### Table 1: `cart`
```sql
CREATE TABLE cart (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INT NOT NULL,
  product_name VARCHAR(255),
  product_price DECIMAL(10, 2),
  product_image TEXT,
  quantity INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id)
);
```

### Table 2: `orders`
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  items JSONB,
  total_price DECIMAL(10, 2),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 New Files Created

1. **src/services/authService.js** - Authentication functions
2. **src/services/cartService.js** - Cart database operations
3. **src/services/orderService.js** - Order management

## 🔄 Modified Files

1. **src/context/CartContext.jsx** - Now uses Supabase
2. **src/pages/Login.jsx** - Full auth UI with sign up/login
3. **src/supabaseClient.js** - Enhanced configuration

---

## 🚀 Features Now Available

### User Authentication
- Create account with name and email
- Login with credentials
- Logout functionality
- Session auto-recovery

### Cart System
- Add items (auto-saves for logged-in users)
- Remove items
- View cart
- Cart persists across sessions

### UI Improvements
- Login page with sign up option
- Error/success messages
- Loading states
- Protected user data display

---

## 🔐 How to Use

### For Users:
1. Click "Login" in navbar
2. Sign up with email/password/name
3. Verify email (check your inbox)
4. Sign in with credentials
5. Add items to cart
6. Items saved automatically!

### For Developers:
- All auth functions in `src/services/authService.js`
- All cart functions in `src/services/cartService.js`
- User state available via CartContext

---

## 📝 Environment Variables

Make sure your `.env` file has:
```
VITE_SUPABASE_URL=https://uorhzqcbzexdptaxymet.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## 🎯 Next Steps

1. **Create the database tables** (use SQL above)
2. **Enable email verification** in Supabase Auth settings
3. **Test authentication** - Try signing up and logging in
4. **Test cart** - Add items and refresh to verify persistence

---

## 💡 Tips

- Cart only saves when user is logged in (local cache when logged out)
- All database operations have error handling
- Session persists automatically
- Cart loads on page refresh

Enjoy your fully connected Jersey Kingdom store! 🚀⚽
