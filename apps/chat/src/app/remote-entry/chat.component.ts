import { Component, OnInit } from "@angular/core";
import { ApiService } from '@chatwidget/api';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'chatwidget-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  apiKey = '63bygjq8kbu4';

  showAddButton = false;
  showDeclareButton = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router,
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
  ) {
    this.showAddButton = this.isRouteAvailable('add-channel');
   }

  ngOnInit() {
    if (this.auth.isAuthenticated$) {
      let username = "";
    
      this.api.getToken().subscribe(response => {
        // console.log(response);
        const token = response.token;
        username = response.username;
        console.log(username);
        // console.log('Token: ', token);

        // Initialize chat service and set translation
        this.chatService.init(this.apiKey, username, token);
        this.streamI18nService.setTranslation();

        // Get all channels the user is in
        this.channelService.init({
          type: 'messaging',
          members: {$in: [username]} 
        });

        // Get active channel
        this.channelService.activeChannel$.subscribe(channel => {
          console.log(channel);
        });
      });
    }
  }

  addChannel() {
    this.router.navigateByUrl('/add-channel');
  }

  isRouteAvailable(path: string): boolean {
    return this.router.config.some(route => route.path === path);
  }

}
