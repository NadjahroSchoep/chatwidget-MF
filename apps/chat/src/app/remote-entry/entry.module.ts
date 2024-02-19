import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import { ChatComponent } from './chat.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ChatComponent, AddChannelComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(remoteRoutes), 
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    SimplebarAngularModule, 
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
})
export class RemoteEntryModule {}
