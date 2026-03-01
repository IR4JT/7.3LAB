const supabaseUrl = 'https://cudvmmrctalrvrgaysyi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1ZHZtbXJjdGFscnZyZ2F5c3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzODQ4ODgsImV4cCI6MjA4Nzk2MDg4OH0.NzI09d3umKhIj4CURHA9dav4-qzqHZ3Q_Rt6nlhVDuw'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for (let book of Books) {
    let bookList = document.getElementById('books');
    bookList = document.getElementById('books'):
    bookList.innerHTML += `<li>${book.title}</li>`
}