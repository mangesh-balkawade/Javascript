import pytube as pt

yt = pt.YouTube("https://www.youtube.com/watch?v=YCuhzjK11iA")

#hindi

#https://www.youtube.com/watch?v=ZRat8Q_pRnc
#https://www.youtube.com/watch?v=U5PwBNcYBkE
#https://www.youtube.com/watch?v=e0iSwwgFDc0
#https://www.youtube.com/watch?v=oF1cHU-LRmA
#https://www.youtube.com/watch?v=FfLI5GetPtM
#https://www.youtube.com/watch?v=Hosb7e7gu-4
#https://www.youtube.com/watch?v=qHHvBhwSOwc
#https://www.youtube.com/watch?v=MbIRbYjLdqM
#https://www.youtube.com/watch?v=JKqh5dmCax0
#https://www.youtube.com/watch?v=RpCFCkw1mO0
#https://www.youtube.com/watch?v=sQ0zy8h12fs





t = yt.streams.filter(only_audio=True)
t[0].download()
