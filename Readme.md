# 🎲 Roll the Dice App

**Roll the Dice** is a simple and fun mobile application built using **React Native with TypeScript**.  
Each tap on the button rolls a virtual dice, updates the dice face on screen, and triggers a haptic feedback for a realistic feel.

---

## 📱 Preview

![Roll the Dice Demo](roll_dice_demo.gif)

---

## ⚙️ Features

- 🎲 Generates random numbers between 1 to 6
- 🎯 Dynamically updates dice image based on result
- 📳 Triggers light haptic feedback on every roll
- 🧩 Clean UI with responsive interaction

---

## 🧠 What I Learned

- ✅ **Handling images in React Native using TypeScript**
  - Used `ImageSourcePropType` to ensure only valid image types are passed.
- ✅ **Fixing TypeScript module errors**
  - Added the following declaration to resolve PNG import issues:
    ```ts
    declare module '*.png';
    ```
- ✅ **Using `PropsWithChildren`**
  - Typed the `Dice` component's props properly using `PropsWithChildren`.

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd roll-the-dice
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install haptic feedback package**

   ```bash
   npm install react-native-haptic-feedback
   ```

4. **Run the app**

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

---

## 🛠️ Tech Stack

* **React Native**
* **TypeScript**
* **Haptic Feedback Library** (`react-native-haptic-feedback`)

---

## 📚 Resources

- 📘 [React Native Docs](https://reactnative.dev/docs/getting-started)
* 📘 [React Native Haptic Feedback (npm)](https://www.npmjs.com/package/react-native-haptic-feedback?activeTab=readme)

---

## 🙌 Credits

This project was inspired by [Hitesh Choudhary’s React Native Mastery Series](https://youtu.be/kGtEax1WQFg?si=FUApkKlAI_QWQMAk)
Built as part of my mobile app development learning journey.

---

## 📄 License

This project is open-source and free to use for educational purposes.

---

> Built with ❤️ using React Native