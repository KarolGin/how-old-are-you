const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const calculateYear = (year, day, month) => {
    let yearResult = currentYear - year;  
    let monthResult = currentMonth - month;
    let dayResult = currentDay - day;
    
    if (monthResult < 0) {
        yearResult -= 1; // Zmniejszamy liczbę lat
        monthResult += 12; // Dodajemy 12 miesięcy
    }
    
    if (dayResult < 0) {
        // Obliczamy liczbę dni w poprzednim miesiącu
        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
        dayResult += prevMonthLastDay; // Dodajemy liczbę dni z poprzedniego miesiąca
        monthResult--; // Zmniejszamy liczbę miesięcy
    }

    console.log(`masz: ${yearResult} lat, ${dayResult} dni i ${monthResult} miesięcy`);
}

calculateYear(2006, 24, 6);
