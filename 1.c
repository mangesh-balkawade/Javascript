#include<stdio.h>
#include<fcntl.h>
int main()
{
    int fd=open("1.txt",O_RDWR);
    if(fd==-1)
    {
        printf("Unable to open");
    }
    int i=-1;
    int size=0;
    while(i!=0)
    {
        char buf='\0';
       i=read(fd,&buf,1);
       size++;
       printf("%c",buf);
    }
    printf("%d",size);
}