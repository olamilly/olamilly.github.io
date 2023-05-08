const app = Vue.createApp({
  data(){
  return{
   fullTweet:{
   username:"CoderInTraining", 
   tweet:""},
   tweets: [],
   searchQuery:"",
   bio:"Excited future software engineer.",
   f: false,
   nt: true
  }
     },
  methods:{
    search1(){
      if(this.searchQuery=="")
        this.f=false
      else
        this.f=true
    },   
    addTweet(){
      //save Tweet
      this.tweets.push(
           {
               user: this.fullTweet.username,
               tweet: this.fullTweet.tweet
           }
       );
      this.fullTweet.tweet = "";
      if(this.tweets.length>0)
        this.nt = false 
     },
    deleteTweet(index){
      this.tweets.splice(index,1)
      if(this.tweets.length==0)
        this.nt = true
    }
  },
 computed: {
 filteredTweets() {
   if (this.tweets.length>0){
     var query = this.searchQuery
     var arr = []
     var valObj = this.tweets.filter(function(elem){
       if( query!="" && elem.tweet.includes(query)){
       arr.push({
         user: elem.user, tweet: elem.tweet
       })
       return elem.user
       }
     })
     if (valObj.length>0){
       return arr
     }
       
     }
 }
 
 }
})
app.mount("#app")