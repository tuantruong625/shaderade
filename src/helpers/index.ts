export const shades = [
 -10,
 5,
 10,
 20,
 30,
 40,
 50,
 60,
 70,
 80,
 90,
 100,
 110,
 120,
 130,
 140,
]

export const adjust = (color: string, amount: number = 0): string | undefined => {
 if (!color) return
 return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)).toUpperCase();
}