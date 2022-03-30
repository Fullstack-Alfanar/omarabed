// question 1 find avg for array
/*
function avg (arr)
{
    let sum=0 ,avg1=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    avg1=sum/arr.length;
    return avg1;
}
const arr=[1,2,3,4],arr1=[1,2,3,4,5],arr2=[1,2,3,4,6];
console.log(avg(arr));
console.log(avg(arr1));
console.log(avg(arr2));
*/
///////////////////////////////////////////////////////////////

// question 2 find min in array
/*
function min (arr)
{
    let min1=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(min1>arr[i])
        {
            min1=arr[i];
        }
    }
    return min1;
}
const arr=[1,2,3,4],arr1=[1,2,3,4,5],arr2=[1,2,3,4,6];
console.log(min(arr));
console.log(min(arr1));
console.log(min(arr2));
*/
/////////////////////////////////////////////////////////////

// question 3 find the biggest string and return length string in array
/*
function max (arr)
{
    let max=arr[0].length;
    for(let i=1;i<arr.length;i++)
    {
        if(max<arr[i].length)
        {
            max=arr[i].length;
        }
    }
    return max;
}
const arr=["omar","abed","husen"],arr1=["asdewde","omar","abed","husen"],arr2=["omar","abed","blabla","husen"];
console.log(max(arr));
console.log(max(arr1));
console.log(max(arr2));
*/
/////////////////////////////////////////////////////////

// question 4 find the biggest string and return the string in array
/*
function max (arr)
{
    let max=arr[0].length,j=0;
    for(let i=1;i<arr.length;i++)
    {
        if(max<arr[i].length)
        {
            max=arr[i].length;
            j=i;
        }
    }
    return arr[j];
}
const arr=["omar","abed","husen"],arr1=["asdewde","omar","abed","husen"],arr2=["omar","abed","blabla","husen"];
console.log(max(arr));
console.log(max(arr1));
console.log(max(arr2));
*/
//////////////////////////////////////////////////////////

// question 5 find how mush numbers bigger than avg or equal in array
/*
function bigger (arr)
{
    let sum=0,avg=0,b=[],j=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    avg=sum/arr.length;
    for(let i=0;i<arr.length;i++)
    {
        if(avg<arr[i])
        {
            b[j]=arr[i];
            j++;
        }
    }
    return b;
}
const arr=[1,2,3,4],arr1=[1,6,2,3,4,5],arr2=[7,1,2,3,4,6];
console.log(bigger(arr));
console.log(bigger(arr1));
console.log(bigger(arr2));
*/
//////////////////////////////////////////////////////////////

// question 6 return ture if the number prime else false
/*
function prime (num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        return false;
    }
    return true;
}
const arr=5,arr1=9,arr2=1;
console.log(prime(arr));
console.log(prime(arr1));
console.log(prime(arr2));
*/
//////////////////////////////////////////////////////////////

// question 7  if all numbers in array are prime return ture else false
/*
function prime (arr)
{
    for(let j=0;j<arr.length;j++)
    {
        for(let i=2;i<arr[j];i++)
        {
            if(arr[j]%i==0)
            return false;
        }
    }
    return true;
}
const arr=[1,2,3,5],arr1=[1,6,2,3,4,5],arr2=[7,1,2,3,4,6];
console.log(prime(arr));
console.log(prime(arr1));
console.log(prime(arr2));
*/
