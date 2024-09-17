# Learning CSS

Welcome to my journey of learning CSS! This README documents the concepts I've learned so far and provides examples from my CSS projects.

## Overview

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. Through CSS, I’ve explored various styling techniques to enhance the visual appearance of web pages. Here, I document the concepts and styles I’ve applied in my learning process.

## Concepts Learned

### 1. **Universal Styles**

I started with universal styles to ensure consistent layout and styling across all elements:

```css
- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- **`margin: 0;`** and **`padding: 0;`** remove default spacing around elements.
- **`box-sizing: border-box;`** ensures that padding and border are included in the element's total width and height.

### 2. **Flexbox Layout**

Using Flexbox, I centered content both horizontally and vertically:

```css
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(./library_img.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
```

- **`display: flex;`** initiates Flexbox on the container.
- **`justify-content: center;`** centers content horizontally.
- **`align-items: center;`** centers content vertically.
- **`min-height: 100vh;`** ensures the container takes up the full viewport height.

### 3. **Styling with Backgrounds**

I applied a background image and adjusted its properties:

```css
.background {
  background: url(./public/library_img.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
```

- **`background-size: cover;`** ensures the image covers the entire element.
- **`background-position: center;`** centers the background image.

### 4. **Border and Shadow Effects**

Borders and shadows enhance the visual depth of elements:

```css
.wrapper {
  width: 420px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #ffff;
  border-radius: 10px;
  padding: 30px 40px;
}
```

- **`border:`** adds a semi-transparent border.
- **`box-shadow:`** creates a shadow effect for depth.
- **`backdrop-filter: blur(20px);`** applies a blur effect to the background.

### 5. **Transitions**

Transitions enable smooth changes between CSS property values:

```css
.input-box input {
  transition: 0.5s;
}

.input-box input:focus {
  border-bottom-color: #0ef;
}
```

- **`transition: 0.5s;`** specifies a 0.5-second transition effect.
- **`transition-delay:`** can be used to delay the start of the transition.

### 6. **Animations**

Animations allow for complex transitions and keyframe-based animations:

```css
.wrapper .bg-animate {
  transition: 1.5s ease;
}

.wrapper.active .bg-animate {
  transform: rotate(0) skewY(0);
}
```

- **`transition: 1.5s ease;`** controls the timing and easing of the transition.
- **`transform: rotate(0) skewY(0);`** animates changes in position, rotation, or skew.

### 7. **Positioning and Overflow**

Various positioning techniques are used to layout elements:

```css
.wrapper {
  position: relative;
  overflow: hidden;
}
```

- **`position: relative;`** positions the element relative to its normal position.
- **`overflow: hidden;`** hides overflowed content outside the element’s boundary.

### 8. **Styling Forms and Inputs**

Forms and input fields are styled for a better user experience:

```css
.input-box input {
  border-bottom: 2px solid #fff;
  padding-right: 23px;
}

.input-box input:focus {
  border-bottom-color: #0ef;
}
```

- **`border-bottom: 2px solid #fff;`** creates a bottom border for inputs.
- **`padding-right: 23px;`** adjusts spacing inside the input field.
- **`input:focus`** changes the border color when the input is focused.

### 9. **Button Styling**

Buttons are styled for better interaction:

```css
.btn {
  border: 2px solid #0ef;
  border-radius: 40px;
  cursor: pointer;
}

.btn::before {
  background: linear-gradient(#081b29, #0ef);
}
```

- **`border-radius: 40px;`** creates rounded corners.
- **`cursor: pointer;`** changes the cursor to a hand icon on hover.
- **`linear-gradient(#081b29, #0ef);`** applies a gradient background.

### 10. **Text and Links**

Text and links are styled for readability and interaction:

```css
.form-box h2 {
  font-size: 32px;
  color: #fff;
  text-align: center;
}

.logreg-link p a {
  color: #0ef;
  text-decoration: none;
}

.logreg-link p a:hover {
  text-decoration: underline;
}
```

- **`font-size: 32px;`** and **`color: #fff;`** set the font size and color.
- **`text-decoration: underline;`** adds an underline on hover.
