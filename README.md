Description
=============
MyReads application is used to show the user the books in his/her
different shelf (Currently reading, Want to read and red) and allows 
him/her to search books by title and author names.

The application uses BooksAPI provided in the starter template.


Instructions to install and use
=================================
	- Download the project zipped files
	- Run "npm install"
	- Run "npm start"
The application should start on your browser with http://localhost:3000 address


Components' Hierarchy
=====================
	- BookApp
		|- MyReads	
			|-BookshelfList
				|- BookGrid
					|- Book
						|-BookTop
							|- BookCover
							|- BookshelfChanger
		|- BookSearch
			|- SearchBar
			|- BookGrid
				|- Book
					|-BookTop
						|- BookCover
						|- BookshelfChanger